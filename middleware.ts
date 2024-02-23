import { NextRequest, NextResponse } from "next/server"
import User from "./app/Model/User";
import {cookies} from "next/headers"
import {connectDB } from "./app/config/db";

export async function middleware(req : NextRequest) {
  console.log("Hello World!");
  return NextResponse.next();
   
   }
