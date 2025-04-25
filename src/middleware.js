import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  

  console.log("Middleware Path:", request.nextUrl.pathname);
  console.log("User Email:", token?.email);

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
