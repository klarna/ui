import React from 'react'
import ProgressBar from '../ProgressBar'
import Code from '../Code'

export default function ProgressBars () {
  return (
    <div>
      <Code>
        <div>
          <ProgressBar percentage={50} fillColor={"error"}/>

          <ProgressBar percentage={33}/>
        </div>
      </Code>
    </div>
  )
}
