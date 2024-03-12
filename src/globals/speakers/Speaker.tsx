import React from 'react'
import styles from './speaker.module.css'
import Image from 'next/image'
import SPEAKER from "../../../public/doc.jpg"
// import { IActivity, IPresenter } from '@/interface/ActivityInterface'


const Speaker = ({presenter}:any) => {
 
  return (
    <div className={`${styles.speaker_container} flex bg-[#F4F4F4] px-3 py-[5px] rounded`}>
        <Image src={presenter.avatar} alt="" width={100} height={100} className={styles.speaker_image}/>
        <div className="ml-2">
            <h1 className="font-medium">{presenter.salutation}.{presenter?.name}</h1>
            <p>Consultant</p>
        </div>
    </div>
  )
}

export default Speaker