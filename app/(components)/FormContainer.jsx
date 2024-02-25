"use client"

import { Poppins } from "next/font/google"
import { Inter } from "next/font/google";
const poppins = Poppins({ weight:"600" , subsets:['latin']});
const interParagraph = Inter({weight:'200' , subsets:['latin']})
import Image from "next/image";
import mascot from "@/public/mascot.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useFormState, useFormStatus , } from "react-dom";
import { useState , useEffect, Suspense } from "react";
import { Skeleton } from '@mui/material';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';



const initialState = {
  message : null
};

export default function FormContainer({ beforeLink ,className , Header , legend , buttonText , children , formAction , name }) {
  const pathname = usePathname();
  const { replace } = useRouter();
      const [isLoading , setIsLoading] = useState(false);
      const [transitionInRight, setTransitionInRight] = useState(false);
      const [transitionInLeft, setTransitionInLeft] = useState(false);
      const searchParams = useSearchParams();
      useEffect(() => {
        setTransitionInRight(true);
      }, []);


   async  function handleIsLoading(e) {
      
       
const message = await formAction(e.get(name));
if(typeof message == "string") { 
const params = new URLSearchParams(searchParams);

params.set("message" , message);
replace(`${pathname}?${params.toString()}`);
setTimeout(() => {
}, 2000);
setIsLoading(false);
}
else {
  setTransitionInLeft(true);

}
      }
  return  (
    <Suspense>
    <div className={`${poppins.className} ${className}  flex-col flex items-center p-20 w-[100%]  transition-all duration-500 transform
    sm:w-[80%]  h-[85vh] gap-10  `}
    style={{ marginLeft: transitionInRight ? "0" : "200vw" , marginRight : transitionInLeft ? "200vw" : "0vw" }}
    >
         <Link href={beforeLink} className="relative right-[60%] flex"> 
            <FontAwesomeIcon icon={faArrowLeft} className="w-[20px]" />
            <p className="ml-3 hover:underline">Back</p>
               </Link>
                <h1 className="text-[25px] whitespace-nowrap sm:text-[31px] md:text-[37px] lg:text-[50px] ">{Header}</h1>

     <form className="flex flex-col justify-center "  onSubmit={() => {setIsLoading(true)
    }}  action={handleIsLoading} >
     <p className={`${interParagraph.className} text-[11px] mb-1 sm:text-[12px] lg:text-[15px] `}>{legend}</p>

<div className="   h-[30px] rounded-lg border-black text-[20px] lg:text-[30px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[650px] h-[50px] md:h-[60px]  ">
<p className="text-red-600 text-[10px]">{searchParams.get("message")}</p>
{children}
</div>

         <button   type="submit" className={`mt-10 bg-[#00569E] rounded-2xl py-3 text-[22px] lg:text-[30px] text-white lg:py-4 ${isLoading ? "opacity-50" : ""}`}>{buttonText}</button>
     </form>
     <Image src={mascot} alt="mascot " width={100} className="lg:w-[120px] self-start"/>
 
 </div>
 </Suspense>
  )
}
