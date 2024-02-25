import { cookies } from "next/headers";

export async function middlewareFunction(direction) {




    const idObj = cookies().get("id");
    let status;
       try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/middleware${direction}`, {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json' // Specify the content type of the request body
        },
        body: JSON.stringify(idObj.value) // Convert the data object to a JSON string
      });
console.log("Middleware Succed Status : ",res.status);
status = res.status;
    }
catch(err) {
  console.log(`There was an error in the middleware of  ${direction} :    `, err)

 
}

return status;


  
}