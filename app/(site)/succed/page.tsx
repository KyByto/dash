import { Poppins } from "next/font/google"
import succed from "@/public/succedImg.png";
const poppins = Poppins({weight:'700' , subsets:['latin']});
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className={`${poppins.className} h-[100vh] bg-[#00569E] flex items-center justify-center flex-col gap-7 `}>
      <h1 className="text-white text-[60px]">
        <span className="block text-center leading-10">SUCCESS!</span>
        <span>YOU ARE REGISTERED</span>
      </h1>
      <h3 className="text-[#96ECFF]">You&apos;re all set to join us at the event. Get ready for an amazing experience!</h3>
      <Image src={succed} alt="succed image" />
      <Link href="/" className="w-[500px] h-[70px]  rounded-2xl bg-white text-[#0069C2] flex justify-center items-center text-[25px]">BACK TO HOMEPAGE</Link>
    </div>
  )
}
