'use client'
import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React , {useState} from 'react'

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Page() {
    const [phone, setPhone] =useState('') // Initialize state for phone number

    const handlePhoneChange = () => {
        setPhone(phone); // Update phone number state when input changes
    }

  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="97%"  /> 
        </Navbar>
       
        <FormContainer  buttonText='Next' legend='It must contain at least 6 digits ' Header='We might need your phone number' className='' >
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
