import { NextRequest, NextResponse } from "next/server"
import {middlewareFunction } from "@/app/lib/middlewareFunction"
export async function middleware(req ) {
  const url = req.nextUrl.clone()

const status = await middlewareFunction(req.nextUrl.pathname);

if(status == 200) {
  return NextResponse.next();
}
else {
  url.searchParams.set('message', 'Please Enter your email First');

  url.pathname = '/email';

  return NextResponse.redirect(url);
}

}

export const config = {
  matcher: ['/password', '/name', '/country' , '/phone' , '/succed'],
}