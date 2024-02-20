'use client'
import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import React , {useState , useMemo } from 'react'
import Select  from 'react-select'
import countryList from 'react-select-country-list'
export default function Page() {
const [value , setValue ] = useState('');
const options = useMemo(() => countryList().getData(), [])
const changeHandler = (value : any) => {
    setValue(value)
  }
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="73%"  /> 
        </Navbar>
        <FormContainer buttonText='Next' legend='' Header='Where do you come from ?' className='' >
        <Select className="" options={options} value={value} onChange={changeHandler} />
            </FormContainer>
        
    </div>
  )
}
