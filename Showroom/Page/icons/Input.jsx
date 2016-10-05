import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Input' circleFill='#F79839'>
    <Page />
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>
    {
      [58, 70].map((y) => (
        <g fill='#C3CFE2' transform={`translate(20 ${y})`}>
          <rect x='15' y='2' width='20' height='2' rx='1' />
          <rect x='7' width='6' height='6' rx='3' />
          <rect fill='#EFF4F9' y='8' width='55' height='2' rx='1' />
        </g>
      ))
    }
    <g fill='#F79839' transform='translate(25 46)'>
      <rect fill='#C3CFE2' x='10' width='20' height='2' rx='1' />
      <rect x='2' width='6' height='6' rx='3' />
      <rect fill='#4F627F' x='10' y='4' width='25' height='2' rx='1' />
      <rect y='8' width='50' height='2' rx='1' />
    </g>
  </Base>
)
