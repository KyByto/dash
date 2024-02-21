"use client"
import React , {useState , useEffect} from 'react'
import Link from 'next/link'

export default function StateBar({width , oldWidth} : {width : string, oldWidth : string }) {
  const [widthState, setWidthState] = useState(oldWidth);

  useEffect(() => {
    // Set the initial width to the oldWidth when the component mounts
  
    // Update the width to the new percentage after a short delay
    setTimeout(() => {
      setWidthState(width);
    }, 1);
  }, [width, oldWidth]);
  

 
  return (
    <div className={` relative top-[10px] flex gap-5 flex-col px-5`}>
    
   
      
      <div className="flex flex-row   bg-[#3c3c432e] h-[3px] lg:h-[4px]  " 
      
      >
          <div className={`bg-blue-500 `}
          style={{
            width: widthState,
            transition: 'width 0.5s ease-in-out',
          }}
               >
          
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='relative bottom-[8px]'>
<path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#34C8FF"/>
</svg>
           </div>
     
      <ul className='flex justify-between'>
        <li>Email</li>
        <li>Password</li>
        <li>Name</li>
        <li>Country</li>
        <li>Phone</li>
      </ul>

      
  </div>
  )
}
