import { itemCreate } from "@/app/actions/itemCreate";
import { EditItemForm } from "../update/_components/EditItemForm";

export default function CreateItemForm() {
  return (
    <div>
      <h1>アイテム作成</h1>
      <EditItemForm itemFormActions={itemCreate} buttonText="作成" />
    </div>
  );
}
