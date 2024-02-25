import Users from "@/app/Model/User"
import {connectDB}  from "@/app/config/db";

 export async function POST(req : Request ,res : Response ) {
    connectDB();
    const body = await req.json();
    try {
  const user = await Users.findOne({id : body.id.value} );
if(!user)     return Response.json({message : "User has now a name " } , {status:404});

user.name = body.name;
await Users.updateOne({id : body.id.value} , user);


    }
    catch(err) {
        console.log("try catch Error occured : \n" , err );
    }
   

    return Response.json({message : "User has now a name " });
    
}