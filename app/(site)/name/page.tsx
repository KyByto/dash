import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'

export default function page() {
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="49%"  /> 
        </Navbar>
        <FormContainer buttonText='Next' legend='Enter a valid name ' Header='What is your full name ?' className='' >
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="text" />

            </FormContainer>
        
    </div>
  )
}
