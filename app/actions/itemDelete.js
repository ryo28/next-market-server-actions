"use server";

import connectDB from "../utils/database";
import { itemModel } from "../utils/schemaModels";

export async function itemDelete(id) {
  try {
    await connectDB();
    await itemModel.deleteOne({ _id: id });
  } catch {
    throw new Error("エラー：アイテム削除失敗");
  }
}
