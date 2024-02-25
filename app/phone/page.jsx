'use client'
import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React , {useState} from 'react'
import {redirect} from "next/navigation"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Cookies from 'js-cookie';

async function formActionPhone( phone ) {
  
  const id = Cookies.get('id');
  
  const body = {
    phone : phone,
    id : id
  }
  let status;
  try {
      
      
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/phone`, {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the request body
      },
      body: JSON.stringify(body) // Convert the data object to a JSON string
    });
    
    console.log("Status Phone api :",res.status);
    status =res.status;
    }
    catch(err) {
      console.log("Error occured in the post request of password : \n" ,err);
      
    }
  if(status == 200) {
return redirect("/succed")

  }
  else {
return redirect("/email?message=Please enter your email again");
  }
  
    }
  
export default function Page() {
    const [phone, setPhone] =useState('') // Initialize state for phone number

    const handlePhoneChange = () => {
        setPhone(phone); // Update phone number state when input changes
    }
    const  handleFormSubmit = async () => {
      // Pass the selected country to the formActionCountry function
    const success =  await formActionPhone( phone );
   
  };

  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="97%" oldWidth='73%'  /> 
        </Navbar>
       
        <FormContainer
                beforeLink="/country"

         formAction={handleFormSubmit} buttonText='Next' legend='It must contain at least 6 digits ' Header='We might need your phone number' className='' >
    <PhoneInput
    style={{
        '--react-international-phone-font-size': '30px' ,
        '--react-international-phone-height': '70px', // Change the height to 40px
        
      }}
      
       defaultCountry="dz"
       value={phone}
       onChange={(phone) => setPhone(phone)}
       className='' 
       inputClassName="bg-blue-500 w-[70%] "
    />
    </FormContainer>
            

    </div>
  )
}
