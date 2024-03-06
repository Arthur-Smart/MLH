import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex flex-col">
        <p className="text-2xl">Our Landing page is coming soon 😊?</p>
        <p>Check the Activity page using the button below</p>
        <Link href="/registration" className="py-2 px-3 rounded bg-[#AAA2C4] text-[#2C2C74]">Activity Page</Link>
    </div>
  )
}

export default page