import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Selector' circleFill='#70E0E0'>
    <Page />
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>
    {
        [46, 58, 70].map((y) => (
          <g transform={`translate(27 ${y})`}>
            <path d='M44 1l2 2l-2 2' strokeLinecap='round' strokeWidth='2' stroke='#4F627F' />
            <rect fill='#C3CFE2' y='4' width='15' height='2' rx='1'/>
            <rect fill='#4F627F' width='20' height='2' rx='1'/>
            <rect fill='#EFF4F9' x='-7' y='8' width='55' height='2' rx='1'/>
          </g>
        ))
    }
    <g transform='translate(20 42)' fill='#70E0E0'>
      <rect x='5' width='50' height='2' rx='1'/>
      <rect x='5' y='12' width='50' height='2' rx='1'/>
    </g>
  </Base>
)
