import connectDB from "@/app/utils/database";
import { itemModel } from "@/app/utils/schemaModels";
import Image from "next/image";
import Link from "next/link";

// データベースからIDに基づいてアイテムを1つ取得する関数
async function itemReadSingle(id) {
  await connectDB(); // データベースに接続
  const singleItem = await itemModel.findById(id); // データベースからIDに基づいてアイテムを取得
  return singleItem;
}

export default async function ReadSingleItem({ params }) {
  const { id } = await params; // URLパラメータからIDを取得
  const singleItem = await itemReadSingle(id); // データベースからアイテムを取得

  return (
    <div className="grid-container-si">
      <title>{singleItem.title}</title>
      <meta name="description" content={singleItem.description} />
      <div>
        <Image
          src={singleItem.image}
          width={750}
          height={500}
          alt="item-image"
          priority
        />
      </div>
      <div>
        <h1>{singleItem.title}</h1>
        <h2>¥{singleItem.price}</h2>
        <hr />
        <p>{singleItem.description}</p>
        <div>
          <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
          <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
        </div>
      </div>
    </div>
  );
}
