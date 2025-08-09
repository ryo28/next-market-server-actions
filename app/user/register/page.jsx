import { userRegister } from "@/app/actions/userRegister";

export const metadata = {
  title: "登録ページ",
  description: "ユーザー登録ページです。新しいアカウントを作成できます。",
};

export default function Register() {
  return (
    <div>
      <h1 className="page-title">ユーザー登録</h1>
      <form action={userRegister}>
        <label>
          <input type="text" name="name" placeholder="名前" required />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="パスワード"
            required
          />
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
