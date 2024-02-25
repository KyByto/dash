 import Users from "@/app/Model/User"
import {connectDB}  from "@/app/config/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

 export async function POST(req : Request ,res : Response ) {
    connectDB();
    const email = await req.json();
    const find = await Users.findOne({email : email});
    if(find && find.email && find.password && find.name && find.country && find.phone) {
        console.log("find" ,find);
        return NextResponse.json({message : "User already exists" , id : find.id} , {status:401});
    } 
   
    
else if( find) {
    return NextResponse.json({message : "User is the same just change props" , id : find.id } , {status:200});

}
else {
    const id = uuidv4();
    await Users.create({email ,id});

    return NextResponse.json({message : "User was created" , id} , {status:200});
}


    

    
}