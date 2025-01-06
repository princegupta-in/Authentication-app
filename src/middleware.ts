import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";
  const isPrivatePath = path === "/profile";
  const token = request.cookies.get("token");

  // Redirect authenticated users from public paths to the dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Add further logic if needed for protected routes
}

// Apply middleware to specific paths
export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
  ],
};
