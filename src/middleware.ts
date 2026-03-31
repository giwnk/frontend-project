import { NextResponse, type NextRequest } from "next/server";
import { JWTExtend } from "./features/Auth/types/Auth";
import { getToken } from "next-auth/jwt";
import environment from "./config/environment";

export async function middleware(request: NextRequest) {
  const token: JWTExtend | null = await getToken({
    req: request,
    secret: environment.AUTH_SECRET,
  });

  const targetPath = request.nextUrl.pathname;

  if (targetPath === "/auth/login" || targetPath === "/auth/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (targetPath.startsWith("/admin")) {
    if (!token) {
      const url = new URL("/auth/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    if (token?.user?.role !== 'admin') {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (targetPath === '/admin') {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
  


  if (targetPath === '/member') {
    return NextResponse.redirect(new URL("/member/dashboard", request.url));
  }

}
export const config = {
  matcher: ["/auth/:path*", "/admin/:path*", "/member/:path*"],
};
