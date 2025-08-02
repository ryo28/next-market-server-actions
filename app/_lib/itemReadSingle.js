import connectDB from "../utils/database";
import { itemModel } from "../utils/schemaModels";

// データベースからIDに基づいてアイテムを1つ取得する関数
export async function itemReadSingle(id) {
  await connectDB(); // データベースに接続
  const singleItem = await itemModel.findById(id); // データベースからIDに基づいてアイテムを取得
  return singleItem;
}
