import React from 'react'
import ProgressBar from '../ProgressBar'
import Code from '../Code'

export default function ProgressBars () {
  return (
    <div>
      <Code>
        <ProgressBar percentage={50}/>
      </Code>
      <Code>
        <ProgressBar percentage={33} fillColor={"blue"}/>
      </Code>
      <Code>
        <ProgressBar percentage={80} borderColor={'light-blue'} fillColor={"gray"}/>
      </Code>
      <Code>
        <ProgressBar percentage={50} style={{height: '20px', width: '70%'}}/>
      </Code>
    </div>
  )
}
