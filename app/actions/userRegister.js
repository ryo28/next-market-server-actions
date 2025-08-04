"use server";

import connectDB from "../utils/database";
import { UserModel } from "../utils/schemaModels";

export async function userRegister(formData) {
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await connectDB();
    await UserModel.create(userData);
  } catch {
    throw new Error("エラー：ユーザー登録失敗");
  }
}
