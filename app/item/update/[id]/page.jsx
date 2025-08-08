import { itemReadSingle } from "@/app/_lib/itemReadSingle";
import { itemUpdate } from "@/app/actions/itemUpdate";
import { EditItemForm } from "../_components/EditItemForm";
import { getToken } from "@/app/utils/auth";

export default async function UpdateItem({ params }) {
  const { id } = await params;
  const singleItem = await itemReadSingle(id); // IDに基づいてアイテムを取得
  const itemUpdateWithId = itemUpdate.bind(null, id); // itemUpdate関数にIDをバインド

  const payload = await getToken();

  if (singleItem.email === payload.email) {
    return (
      <div>
        <h1 className="page-title">アイテム編集</h1>
        <EditItemForm
          itemFormActions={itemUpdateWithId}
          singleItem={singleItem}
          buttonText="編集"
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>アクセス権限がありません</h1>
        <p>このアイテムを編集する権限がありません。</p>
      </div>
    );
  }
}
