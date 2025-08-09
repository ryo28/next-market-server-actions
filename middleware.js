import { NextResponse } from "next/server";
import { updateToken } from "./app/utils/auth";

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    // トークンが存在しない場合、ログインページにリダイレクト
    return NextResponse.redirect(new URL("/user/login", request.url));
  }
  try {
    return updateToken(token);
  } catch {
    if (!token) {
      // トークンが無効な場合、ログインページにリダイレクト
      return NextResponse.redirect(new URL("/user/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/item/create", "/item/update/:path*", "/item/delete/:path*"], // ミドルウェアを適用するパスを指定
};
