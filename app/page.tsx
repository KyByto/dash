import Image from "next/image";
import Link from "next/link";
import bgDash from "@/public/bgHome.svg"
import Navbar from "./(components)/Navbar";
import { Poppins} from "next/font/google";

import Button from "./(components)/Button"
const poppins= Poppins({ weight:'700' ,subsets: ["latin"] });

export default function Home() {
  return (
    <div className={poppins.className}>
    <Navbar className={`${poppins.className} text-[#47C5FB] text-[55px] gap-12 `} imageClassName="" >
    Flutter
</Navbar>
    
    <main className="bg-[#0069C2] w-full h-[100%] flex md:px-18 xl:px-22   flex-row sm:pl-[12px] pl-12">
      
      <section className="flex flex-col md:pl-5  md:pl-10 pt-12 w-[60%] gap-7 ">
   <h1 className="text-white text-[32px] sm:text-[32px] sm:leading-[32px]  md:text-[36px]  xl:text-[50px] md:leading-[32px]  lg:leading-[52px]">FLUTTERING INTO EXCELLENCE, DASHING TOWARED SUCCESS </h1>
    <p className="text-[#96ECFF] md:text-[10px] lg:text-[18px] mr-[13%]">Join us for the ultimate Dash event! Register now and be part of a coding experience like no other. Don&apos;t miss out , sign up today</p>
   <Link href="email"><Button text="Register Now" /></Link>
   </section>
   
    <Image src={bgDash} alt="dash"   />
    
    </main>
    </div>
  )
}
