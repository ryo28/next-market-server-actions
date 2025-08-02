"use server";
import connectDB from "@/app/utils/database";
import { itemModel } from "@/app/utils/schemaModels";
export async function itemCreate(formData) {
  const itemData = {
    title: formData.get("title"),
    price: formData.get("price"),
    image: formData.get("image"),
    description: formData.get("description"),
  };
  try {
    await connectDB();
    await itemModel.create(itemData);
  } catch {
    throw new Error("エラー：アイテム作成失敗");
  }
}
