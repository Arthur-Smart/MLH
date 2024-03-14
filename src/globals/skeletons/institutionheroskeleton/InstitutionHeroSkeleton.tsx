import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InstitutionHeroSkeleton = () => {
  return (
    <div className="container px-0">
        <div className="container py-2">
        <Skeleton width={200}/>
      </div>
      <div className="container py-2">
        <Skeleton width="100%" height={350}/>
      </div>
    </div>
  )
}

export default InstitutionHeroSkeleton