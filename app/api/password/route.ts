import Users from "@/app/Model/User"
import {connectDB}  from "@/app/config/db";
import { NextFontManifestPlugin } from "next/dist/build/webpack/plugins/next-font-manifest-plugin";
import { NextResponse } from "next/server";
 export async function POST(req : Request ,res : Response ) {
    connectDB();
    const body = await req.json();
    console.log("Body" , body);
    const id = body.id.value;
    let status;
    try {
    const user =    await Users.findOne({id : id} );
   
    console.log("USER" , user);
    if(!user)  return NextResponse.json({message : "User not found" , id : id} , {status:404});

   if(!user.email) return NextResponse.json({message : "User has no email" , id : id} , {status:404});
user.password = body.password;

await Users.updateOne({id : id} , user);

}
    catch(err) {
        console.log("try catch Error occured : \n" , err );
        return NextResponse.json({message : "Error occured" , id : id} , {status:500});

    }
    return NextResponse.json({message : "User has now a password" , id : id} , {status:200});

    
}

