import React from 'react'
import { TopHeader } from './topHeader'
import { BottomHeader } from './bottomHeader'

export default function Header() {
  return (
    <>
     <header className="w-full border-b border-gray-200 bg-white text-sm ">
    <TopHeader/>
    <BottomHeader/>

     </header>
    </>
  )
}
