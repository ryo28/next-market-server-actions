import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getToken() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  if (!token) {
    return null;
  }
  const secretKey = new TextEncoder().encode("next-market-server");
  const { payload } = await jwtVerify(token, secretKey); // トークンを検証してペイロードを取得
  return payload;
}
