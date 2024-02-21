'use client'
import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React , {useState , useMemo } from 'react'
import Select  from 'react-select'
import countryList from 'react-select-country-list'
import {redirect} from "next/navigation"
import Cookies from 'js-cookie';
async function formActionCountry(inital , data ) {
  console.log("FORM ACTION CONTRY")
const country = data.label;
const id = Cookies.get('id');

const body = {
  country : country,
  id : id
}

try {
    
    
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/country`, {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json' // Specify the content type of the request body
    },
    body: JSON.stringify(body) // Convert the data object to a JSON string
  });
  
  console.log("Status country API :",res.status);
  return res.status ==200;
  }
  catch(err) {
    console.log("Error occured in the post request of password : \n" ,err);
    return false;
  }


  }


export default function Page() {

const [value , setValue ] = useState('');
const options = useMemo(() => countryList().getData(), [])
const changeHandler = (value ) => {
    setValue(value)
  }
  const  handleFormSubmit = async () => {
    // Pass the selected country to the formActionCountry function
  const success =  await formActionCountry(null,  value );
  if(success) {
    redirect("/phone")
  } 
};
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="73%"  /> 
        </Navbar>
        <FormContainer formAction={handleFormSubmit} buttonText='Next' legend='' Header='Where do you come from ?' className='' >
        <Select className="" options={options} value={value} onChange={changeHandler} />
            </FormContainer>
        
    </div>
  )
}
