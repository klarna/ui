import React from 'react'
import ProgressBar from '../ProgressBar'

export default {
  title: 'ProgressBar',
  variations: [{
    title: 'ProgressBar',
    Regular: [
      <ProgressBar percentage={50} />
    ],
    Blue: [
      <ProgressBar percentage={33} fillColor={"blue"} />
    ],
    'Light blue': [
      <ProgressBar percentage={80} borderColor={'light-blue'} fillColor={"gray"} />
    ],
    'Custom inline styles': [
      <ProgressBar percentage={50} style={{height: '20px', width: '70%'}} />
    ]
  }]
}
