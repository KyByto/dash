import Image from "next/image";
import flutterIcon from "@/public/flutterIcon.png";
import Link from "next/link";

export default function Navbar({ children, className , imageClassName }: { children: React.ReactNode; className: string , imageClassName: string }) {
  return (
    <nav className={`${className} h-[15vh] flex items-center px-1 shadow-md `}>
      {/* Ensure that only recognized props are passed to the Image component */}
    <Link href="/"> <Image src={flutterIcon} alt="flutter icon" width={50} height={100} className={imageClassName}  />
    </Link>
   <div className="w-[100%]">{children}</div>   
    </nav>
  );
}
