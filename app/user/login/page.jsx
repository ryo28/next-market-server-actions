"use client";
import { userLogin } from "@/app/actions/userLogin";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export default function Login() {
  const [state, formAction] = useActionState(userLogin, initialState);
  return (
    <div>
      <h1 className="page-title">ユーザーログイン</h1>
      <form action={formAction}>
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
        {state && <h3>{state.message}</h3>}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
