import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import {cookies} from "next/headers"
import {redirect} from "next/navigation"
 async function formActionName( inital , formData) {
  "use server"
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ'-]+)*$/;

  const name = await  formData.get('name');
  console.log("name ")
  if(!nameRegex.test(name)) {
    return redirect('/name?message=Please Enter A valid name');
    }


  const cookieStore = cookies();
  const idObj = cookieStore.get('id');
  const id = idObj.value;

  const body = {
    id : id,
    name : name
  }

  let status ;
    try {
    
    
    const res = await fetch("http://localhost:3000/api/name", {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Specify the content type of the request body
      },
      body: JSON.stringify(body) // Convert the data object to a JSON string
    });
    
    console.log("Status Name  :",res.status);
    status = res.status;
    }
    catch(err) {
      console.log("Error occured in the post request of email" ,err);
    }
    
    if(status ==200) {
      return redirect("/country");

    }

    }
export default function page() {
  return (
    <div className='flex-col flex items-center  ' >
        <Navbar className={`flex gap-[5%]  items-center lg:text-[22px] w-[100%] `} imageClassName='hidden sm:block'>
            <StateBar width="49%"  /> 
        </Navbar>
        <FormContainer formAction={formActionName} buttonText='Next' legend='Enter a valid name ' Header='What is your full name ?' className='' >
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="text" name='name' />

            </FormContainer>
        
    </div>
  )
}
