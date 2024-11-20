import { NextResponse } from "./node_modules/next/server";


export function middleware(req: NextResponse) {
  console.log(req.url)
  return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
  matcher: "/about/:path*",
}