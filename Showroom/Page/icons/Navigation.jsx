import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Navigation' circleFill='#FC4F75'>
    <Page />
    <rect fill='#4F627F' x='35' y='47' width='30' height='2' rx='1'/>
    <g transform='translate(20 25)'>
      <rect fill='#EFF4F9' y='7' width='60' height='2' rx='1'/>
      <rect fill='#FC4F75' y='7' width='20' height='2' rx='1'/>
      <rect fill='#FC4F75' x='5' width='10' height='2' rx='1'/>
      <rect fill='#8BA1BC' x='25' width='10' height='2' rx='1'/>
      <rect fill='#8BA1BC' x='45' width='10' height='2' rx='1'/>
    </g>
    <g fill='#C3CFE2' transform='translate(25 54)'>
      {
        [50, 50, 40, 40, 50, 50, 50].map((width, index) =>
          <rect y={index * 4} width={width} height='2' rx='1'/>
        )
      }
    </g>
  </Base>
)
