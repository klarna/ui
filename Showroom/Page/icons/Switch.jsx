import React from 'react'
import Base, {Page} from './Base'

export default () => (
  <Base title='Icon' circleFill='#1E5399'>
    <Page />
    <rect fill='#4F627F' x='25' y='30' width='20' height='2' rx='1'/>
    <rect fill='#4F627F' x='50' y='72' width='25' height='2' rx='1'/>
    <rect fill='#4F627F' x='50' y='76' width='25' height='2' rx='1'/>
    <g transform='translate(25 37)'>
      <path d='M0 2.5C0 1 1 0 2.5 0h45C49 0 50 1 50 2.5V14H0V2.5zM2 3c0-.6.5-1 1-1h44c.6 0 1 .5 1 1v9H2V3z' fill='#EFF4F9'/>
      <rect fill='#C3CFE2' x='4' y='6' width='35' height='2' rx='1'/>
    </g>
    <g transform='translate(25 49)'>
      <path d='M29 2H2v9c0 .5.4 1 1 1h26V2zm2 0h17v9c0 .6-.5 1-1 1H31V2zM0 0h50v11.5c0 1.4-1 2.5-2.5 2.5h-45C1 14 0 13 0 11.5V0z' fill='#EFF4F9'/>
      <rect fill='#C3CFE2' x='4' y='6' width='15' height='2' rx='1'/>
      <rect fill='#C3CFE2' x='33' y='6' width='10' height='2' rx='1'/>
    </g>
    <g transform='translate(25 70)'>
      <rect fill='#1E5399' width='20' height='10' rx='5'/>
      <circle fill='#8DF' cx='15' cy='5' r='3'/>
    </g>
    <circle stroke='#8DF' strokeWidth={2} cx='90' cy='40' r='9'/>
  </Base>
)
