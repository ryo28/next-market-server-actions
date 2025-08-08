"use server";

import { cookies } from "next/headers";
import { SignJWT } from "jose";
import connectDB from "../utils/database";
import { UserModel } from "../utils/schemaModels";
import { redirect } from "next/navigation";

const config = {
  mazAge: 60 * 60 * 24, // 1 day
  httpOnly: true, // JavaScriptからアクセスできないようにする
};

export async function userLogin(prevState, formData) {
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await connectDB();
    //findOne メソッドを使用して、データベースからユーザーデータを取得
    //email: 何を検索するか　userData.email: 検索する値
    const savedUserData = await UserModel.findOne({
      email: userData.email,
    });

    if (savedUserData) {
      //ユーザーデータが存在する場合の処理
      if (userData.password === savedUserData.password) {
        //パスワードが一致する場合の処理

        //ここでセッションやトークンの生成を行うことができます
        //例: セッションの生成やJWTトークンの発行など
        const secretKey = new TextEncoder().encode("next-market-server");

        const payload = {
          email: userData.email,
        };

        const token = await new SignJWT(payload) //ペイロードを設定
          .setProtectedHeader({ alg: "HS256" }) //ヘッダーにアルゴリズムを指定
          .setExpirationTime("1d") // トークンの有効期限を1日に設定 2h 5mなども可能
          .sign(secretKey); //ヘッダーとペイロードとシークレットキーでハッシュ化して署名を追加

        //クッキーにトークンを保存
        const cookieStore = await cookies();
        cookieStore.set("token", token, config);
      } else {
        //パスワードが一致しない場合の処理
        return { message: "エラー：パスワードが間違っています" };
      }
    } else {
      //ユーザーデータが存在しない場合の処理
      return { message: "エラー：ユーザー登録をしてください" };
    }
  } catch {
    return { message: "エラー：ログイン失敗" };
  }
  redirect("/"); // ログイン成功後にトップページへリダイレクト
}
