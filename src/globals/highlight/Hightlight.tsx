import React from 'react'
import styles from './highlight.module.css'
import INSTITUTION_IMAGE from "../../../public/insight.jpg"
import Image from 'next/image'

const Highlight = () => {
  return (
    <div className={`${styles.insight_container} border-[1px] border-gray-200 rounded`}>
        <Image src={INSTITUTION_IMAGE} alt="Medical Learning Hub" width={500} height={600} className={styles.highlight_image}/>
        <div className="p-2">
          <h2 className="text-base font-medium">Title goes here</h2>
          <p className="text-[15px] text-[#333333]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
        </div>
    </div>
  )
}

export default Highlight