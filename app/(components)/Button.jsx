"use client"
import { useState } from "react"
export default function Button({text }) {
const [isLoading , setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoading(true)} className={`bg-white p-4 rounded-3xl sm:w-[300px] whitespace-nowrap  text-[#0069C2] text-2xl mt-[30px] mb-10 ${isLoading ? "opacity-50" : ""}`}>{text}</button>
    </div>
  )
}
