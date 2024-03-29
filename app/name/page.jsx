import FormContainer from '@/app/(components)/FormContainer'
import Navbar from '@/app/(components)/Navbar'
import StateBar from '@/app/(components)/stateBar'
import {cookies} from "next/headers"
import {redirect} from "next/navigation"

 async function formActionName( name) {
  "use server"
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ'-]+)*$/;

  if(!nameRegex.test(name)) {
    return redirect('/name?message=Please Enter A valid name');
    }


  const cookieStore = cookies();
  const id = cookieStore.get('id');


  const body = {
    id : id,
    name : name
  }
console.log("Body : ", body)
  let status ;
    try {
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/name`, {
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
            <StateBar width="49%" oldWidth='25%' /> 
        </Navbar>
        <FormContainer 
                beforeLink="/password"

        name="name"
        formAction={formActionName} buttonText='Next' legend='Enter a valid name ' Header='What is your full name ?' className='' >
        <input className="border border-black p-3 rounded-lg w-[100%] h-[100%] " type="text" name='name' />

            </FormContainer>
        
    </div>
  )
}
