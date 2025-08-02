"use server";

import connectDB from "../utils/database";
import { itemModel } from "../utils/schemaModels";

export async function itemUpdate(id, formData) {
  const itemData = {
    title: formData.get("title"),
    price: formData.get("price"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  try {
    await connectDB();
    //updateOne 1つのアイテムを更新
    //｛_id:id} _id（MongoDBの自動生成される一意のID）がidに一致するアイテムを更新
    await itemModel.updateOne({ _id: id }, itemData);
  } catch {
    throw new Error("エラー：アイテム編集失敗");
  }
}
