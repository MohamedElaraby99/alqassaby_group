'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingIndicator() {
 

  return (
    <>
     <div className=" h-screen  flex justify-center items-center  bg-[#f3f2ed]">

    <div className="flex flex-col gap-3">

 <span className="loader"></span>
     <h2 className="text-[#a01623] mt-4 text-lg font-bold"> Loading ....</h2>

    </div>
     </div>
    </>
  )
}

