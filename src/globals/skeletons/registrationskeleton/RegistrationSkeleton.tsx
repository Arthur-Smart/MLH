import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RegistrationSkeleton = () => {
  return (
    <div className="w-full flex items-center h-[60vh]">
  <div className="flex flex-col  container py-2">
        <Skeleton width="40%"/>
        <Skeleton width="60%"/>
        <Skeleton width="40%"/>
        <Skeleton width="60%"/>
        <Skeleton width="80%"/>
      </div>
      <div className="container py-2">
        <Skeleton width="100%" height={350}/>
      </div>
    </div>
  )
}

export default RegistrationSkeleton