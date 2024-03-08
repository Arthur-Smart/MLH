import React from 'react'
import styles from "./insight.module.css"
import Insight from '../highlight/Hightlight'

const Insights = () => {
  return (
    <main className="w-full grid grid-cols-3 gap-3">
        <Insight/>
        <Insight/>
        <Insight/>
    </main>
  )
}

export default Insights