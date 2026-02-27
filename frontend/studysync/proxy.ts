import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()
    url.pathname = '/signin'
    
    
 
    const token = request.cookies.get('token')?.value;

    if (!token) {
      console.log(url);
         return NextResponse.redirect(url);

    }

    return NextResponse.next()

}

export const config = {
  matcher: [
    '/home/:path*',
    '/profile/:path*',
  ],
}