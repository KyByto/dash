import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React from 'react'
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

 async function formActionEmail(email) {
  "use server"
  let status;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) {
      return redirect('/email?message=Please Enter A valid email');
    }
    try {
    console.log("PROCESS ENV IS :" , process.env.NEXT_PUBLIC_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/email`, {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the request body
      },
      body: JSON.stringify(email) // Convert the data object to a JSON string
    });
    
    console.log("Status :",res.status);
    status = res.status;
    const data = await res.json();
    const id = data.id
    
    cookies().set("id" , id);

}
    catch(err) {
      console.log("Error occured" , err);
    }
console.log("Status is ," , status)
if(status ==200) {
  return redirect("/password");
}

else if(status == 401) {
  return "Email already exists. Please enter a different email."
}
else {
  return "An error occured. Please try again ."
}
    }

export default function page() {
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="2%" oldWidth='0%'  /> 
        </Navbar>
        <FormContainer
                beforeLink="/"

        name="email"
formAction={formActionEmail}
         buttonText='Continue'
          legend='First, enter your email address' 
          Header='CREATE YOUR ACCOUNT'
           className='' >
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="text" name='email' />
 </FormContainer>
        
    </div>
  )
}

