import { itemReadSingle } from "@/app/_lib/itemReadSingle";
import { itemDelete } from "@/app/actions/itemDelete";
import { getToken } from "@/app/utils/auth";
import Image from "next/image";

export default async function DeleteItemForm({ params }) {
  const { id } = await params;
  const singleItem = await itemReadSingle(id);
  const itemDeleteWithId = itemDelete.bind(null, id);

  const payload = await getToken();
  if (singleItem.email === payload.email) {
    return (
      <div>
        <h1>アイテム削除</h1>
        <form action={itemDeleteWithId}>
          <h2>{singleItem.title}</h2>
          <Image
            src={singleItem.image}
            width={750}
            height={500}
            alt="item-image"
            priority
          />
          <h3>￥{singleItem.price}</h3>
          <p>{singleItem.description}</p>
          <button>削除</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>アクセス権限がありません</h1>
        <p>このアイテムを削除する権限がありません。</p>
      </div>
    );
  }
}
