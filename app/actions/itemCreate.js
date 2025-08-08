"use server";
import connectDB from "@/app/utils/database";
import { itemModel } from "@/app/utils/schemaModels";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
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

  revalidatePath("/"); //アイテム作成後にトップページを再検証
  redirect("/");
}
