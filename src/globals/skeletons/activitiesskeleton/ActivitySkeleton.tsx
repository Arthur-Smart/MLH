import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from "./activityskeleton.module.css"

const ActivitySkeleton = ({cards}:any) => {
  return  Array(cards).fill(0).map((_, i) =>  (
    <div key={i} className="">
      <div className={styles.top}>
        <Skeleton width="100%" height={200}/>
      </div>
      <div>
        <Skeleton width="50%"/>
      </div>
      <div>
        <Skeleton width="100%" count={3}/>
      </div>
      <div className="flex items-center justify-between">
        <Skeleton width={100}/>
        <Skeleton circle width={40} height={40}/>
      </div>
    </div>
  ))
 
}

export default ActivitySkeleton