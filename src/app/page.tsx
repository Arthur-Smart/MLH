import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="w-screen flex flex-col items-center justify-center">
      <section className="container px-3 rounded h-[515px] bg-gray-600 my-3 flex flex-col items-center justify-center">
        <p className="text-3xl text-gray-200 font-semibold">MLH BANNER GOES HERE</p>
        <p className="text-gray-200">The responsiveness of this page is not fixed if you are seeing this text</p>
      </section>
    <div className="w-screen h-screen flex items-center justify-center flex flex-col px-4">
        <p className="text-2xl text-center">Our Landing page is being developed 😊?</p>
        <p className="text-center">Check the Activity page using the button below</p>
        <Link href="/registration/avenue" className="py-2 px-3 rounded bg-[#AAA2C4] text-[#2C2C74]">Activity Page</Link>
    </div>
    </main>
  )
}

export default page