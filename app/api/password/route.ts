import Users from "@/app/Model/User"
import {connectDB}  from "@/app/config/db";

 export async function POST(req : Request ,res : Response ) {
    connectDB();
    const body = await req.json();
    try {
        await Users.findOneAndUpdate({id : body.id} , {password : body.password});

    }
    catch(err) {
        console.log("try catch Error occured : \n" , err );
    }
   

    return Response.json({message : "user has now a password " });
    
}