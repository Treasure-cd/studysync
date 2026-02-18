import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect('/login');

    }

    return NextResponse.next()

}

export const config = {
  matcher: [
    '/home/:path*',
    '/profile/:path*',
  ],
}