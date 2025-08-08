export function EditItemForm({
  itemFormActions,
  singleItem,
  buttonText,
  payload,
}) {
  return (
    <form action={itemFormActions}>
      <input
        defaultValue={singleItem ? singleItem.title : ""}
        type="text"
        name="title"
        placeholder="アイテム名"
        required
      />
      <input
        defaultValue={singleItem ? singleItem.price : ""}
        type="text"
        name="price"
        placeholder="価格"
        required
      />
      <input
        defaultValue={singleItem ? singleItem.image : ""}
        type="text"
        name="image"
        placeholder="画像"
        required
      />
      {payload && <input type="hidden" name="email" value={payload.email} />}
      <textarea
        name="description"
        rows={15}
        defaultValue={singleItem ? singleItem.description : ""}
        placeholder="商品説明"
        required
      />
      <button>{buttonText}</button>
    </form>
  );
}
