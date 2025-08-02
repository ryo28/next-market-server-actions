export function EditItemForm({ itemUpdateWithId, singleItem }) {
  return (
    <form action={itemUpdateWithId}>
      <input
        defaultValue={singleItem.title}
        type="text"
        name="title"
        placeholder="アイテム名"
        required
      />
      <input
        defaultValue={singleItem.price}
        type="text"
        name="price"
        placeholder="価格"
        required
      />
      <input
        defaultValue={singleItem.image}
        type="text"
        name="image"
        placeholder="画像"
        required
      />
      <textarea
        name="description"
        rows={15}
        defaultValue={singleItem.description}
        placeholder="商品説明"
        required
      />
      <button>編集</button>
    </form>
  );
}
