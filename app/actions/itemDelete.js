"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../utils/database";
import { itemModel } from "../utils/schemaModels";
import { redirect } from "next/dist/server/api-utils";

export async function itemDelete(id) {
  try {
    await connectDB();
    await itemModel.deleteOne({ _id: id });
  } catch {
    throw new Error("エラー：アイテム削除失敗");
  }
  revalidatePath("/"); // アイテム削除後にトップページを再検証
  redirect("/"); // アイテム削除後にトップページへリダイレ
}
