import { NextRequest, NextResponse } from "next/server"
import {cookies} from "next/headers"
import { connectDB } from "@/app/config/db";
import Users from "@/app/Model/User"

export async function POST(req ) {
  await  connectDB();
  const id = await req.json();
    if(!id) return NextResponse.json({message : "The Id is not recognized"} , {status:404})
 const user = await  Users.findOne({ id: id });
console.log("USER FIND NAME" , user)
if(!user) return NextResponse.json({message : "The User do not exist"} , {status :404});
if(!user?.email || !user?.password) return NextResponse.json({message : "The email or the password do not exist"} , {status :404});



 return NextResponse.json({message : "User is authorized"} , {status :200});

  }

