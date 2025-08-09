import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getToken() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  if (!token) {
    return null;
  }
  const secretKey = new TextEncoder().encode("next-market-server");
  const { payload } = await jwtVerify(token, secretKey); // トークンを検証してペイロードを取得
  return payload;
}
//古いtokenを受け取り検証してトークンが存在する場合は更新を行いcookieに保存する関数
export async function updateToken(token) {
  const secretKey = new TextEncoder().encode("next-market-server");
  const { payload } = await jwtVerify(token, secretKey);

  const newToken = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secretKey);

  const response = NextResponse.next(); //NextResponseとは：HTTPレスポンスを生成するためのクラス
  response.cookies.set({
    //cookieを設定
    name: "token", //cookieの名前
    value: newToken, //cookieの値
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true, //HTTPOnly属性を設定:xss対策
  });
  return response;
}
