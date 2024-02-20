 import Users from "@/app/Model/User"
import {connectDB, disconnectDB}  from "@/app/config/db";
import { redirect } from "next/navigation";
import { disconnect } from "process";
import { v4 as uuidv4 } from 'uuid';

 export async function POST(req : Request ,res : Response ) {
    const email = await req.json();
    const find = await Users.findOne({email : email});
    if(find) {
        return new Response( "User was find" , {
            status:401
        });
    } 
    
    const id = uuidv4();
    await Users.create({email ,id});
    disconnectDB()

    return Response.json({message : "user created ! " , id : id});
    
}