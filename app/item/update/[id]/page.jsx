import { itemReadSingle } from "@/app/_lib/itemReadSingle";
import { itemUpdate } from "@/app/actions/itemUpdate";
import { EditItemForm } from "../_components/EditItemForm";

export default async function UpdateItem({ params }) {
  const { id } = await params;
  const singleItem = await itemReadSingle(id); // IDに基づいてアイテムを取得
  const itemUpdateWithId = itemUpdate.bind(null, id); // itemUpdate関数にIDをバインド
  return (
    <div>
      <h1>アイテム編集</h1>
      <EditItemForm
        itemFormActions={itemUpdateWithId}
        singleItem={singleItem}
        buttonText="編集"
      />
    </div>
  );
}
