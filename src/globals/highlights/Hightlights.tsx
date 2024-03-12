import React from 'react'
import styles from "./hightlights.module.css"
import Highlight from '../highlight/Hightlight'

const Highlights = () => {
  return (
    <main className="w-full flex flex-col justify-center">
      <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
      <Highlight/>
      <Highlight/>
      <Highlight/>
      <Highlight/>
      <Highlight/>
      <Highlight/>
      </div>
        <button className="mt-4 bg-[#3E2C78] hover:bg-[#3E2C78]/90  rounded-full text-white py-2 px-4 text-[15px] w-[fit-content] self-center">Load more</button>
    </main>
  )
}

export default Highlights