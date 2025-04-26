import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("Request Headers:", request.headers);
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // console.log(process.env.NEXTAUTH_SECRET)

  // Redirect unauthenticated users
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

// Define protected routes
export const config = {
  matcher: ["/user/:path*", "/order/:path*", "/checkout/:path*"],
};
