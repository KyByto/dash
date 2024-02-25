import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React from 'react'
import {redirect} from "next/navigation"
import { cookies } from 'next/headers'

let count = 0;

 async function formActionPassword( password) {
  "use server"
  const cookieStore = cookies();
  let status;
  const id = cookieStore.get('id');
if(!id) return "Id not found in cookies. Please enter your email again."
  console.log("Id trouvé" , id);
    if((password.length < 5 )) {
      return "Password too Short"
    }
    const body = {
      id : id,
      password : password
    }
console.log("Body : ",body)
    try {
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/password`, {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the request body
      },
      body: JSON.stringify(body) // Convert the data object to a JSON string
    });
    
    console.log("Status Password api :",res.status);
    status = res.status;
    }
    catch(err) {
      console.log("Error occured in the post request of password : \n" ,err);
    }
    
    if(status ==200) {
      return redirect("/name");
    }
   
    else {
    if(count < 1) {
      return "An error occured. Please try again ."
      count++;
    }
    else {
      return redirect("/email?message=Please enter your email again");
    }

  }
    }
export default function page() {
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="25%" oldWidth='2%'  /> 
        </Navbar>
        <FormContainer
                beforeLink="/email"

        name="password"
         buttonText='Next' legend='It must contain at least 6 digits ' Header='Enter your password'
         className=''
         formAction={formActionPassword}>
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="password" name='password'/>

            </FormContainer>
        
    </div>
  )
}
