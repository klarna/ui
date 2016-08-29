import React from 'react'
import Base, {Page} from './Base'

export default () => (
  <Base title='Checklist' circleFill='#E01953'>
    <Page />
    <g transform='translate(20 32)'>
      {[[0, 30], [22, 35], [44, 20]].map(([y, width]) => (
        <rect fill='#4F627F' x='20' y={y} width={width} height='2' rx='1'/>
      ))}
      {[0.5, 22.5, 44.5].map((y) => (
        <path d={`M 0.5 ${y} l 4.5 4.5 l 8 -9`} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' stroke='#E01953'/>
      ))}
    </g>
  </Base>
)
