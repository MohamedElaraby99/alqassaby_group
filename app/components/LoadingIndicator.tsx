'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingIndicator() {
 

  return (
    <>
     <div className=" h-screen  flex justify-center items-center bg-red-100">

      <span className="loader">Load&nbsp;ng</span>
     </div>
    </>
  )
}

