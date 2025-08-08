import Link from "next/link";
import connectDB from "./utils/database";
import { itemModel } from "./utils/schemaModels";
import Image from "next/image";

export const dynamic = "force-dynamic"; //このページは常に最新のデータを表示するため、動的に生成される

const itemReadAll = async () => {
  await connectDB(); //データベースに接続
  const allItems = await itemModel.find(); //全てのアイテムを取得
  return allItems;
};

export default async function ReadAllItems() {
  const allItems = await itemReadAll();

  return (
    <div className="grid-container-in">
      <h1>こんにちは</h1>
      {allItems.map((item) => (
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image
            src={item.image}
            width={750}
            height={500}
            alt="item-image"
            priority
          />
          <div>
            <h2>￥{item.price}</h2>
            <h3>{item.name}</h3>
            {/* substringを使用して、説明文の最初の80文字を表示 */}
            <p>{item.description.substring(0, 80)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
