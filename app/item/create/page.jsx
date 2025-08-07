import { itemCreate } from "@/app/actions/itemCreate";
import { EditItemForm } from "../update/_components/EditItemForm";
import { getToken } from "@/app/utils/auth";

export default async function CreateItemForm() {
  const payload = await getToken();

  return (
    <div>
      <h1>アイテム作成</h1>
      <EditItemForm itemFormActions={itemCreate} buttonText="作成" />
    </div>
  );
}
