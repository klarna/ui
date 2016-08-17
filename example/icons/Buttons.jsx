import React from 'react'
import Base, {Page} from './Base'

export default () => (
  <Base title='Button' circleFill='#007F8C'>
    <Page />
    <g transform='translate(25 30)'>
      <rect fill='#4F627F' x='10' width='30' height='2' rx='1'/>
      <path d='M0 29c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H1c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h38c.55 0 1 .44 1 1 0 .55-.45 1-1 1H1c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h38c.55 0 1 .44 1 1 0 .55-.45 1-1 1H1c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H1c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H1c-.55 0-1-.44-1-1z' fill='#C3CFE2'/>
      <rect fill='#007F8C' x='30' y='40' width='20' height='10' rx='1'/>
      <rect fill='#48E29F' x='35' y='44' width='10' height='2' rx='1'/>
      <path d='M0 41c0-.55.46-1 1-1h23c.55 0 1 .46 1 1v8c0 .55-.46 1-1 1H1c-.55 0-1-.46-1-1v-8zm2 1h21v6H2v-6z' fill='#007F8C'/>
      <rect fill='#007F8C' x='7' y='44' width='11' height='2' rx='1'/>
    </g>
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>

    <circle stroke='#48E29F' strokeWidth={2} cx='90' cy='40' r='9'/>
  </Base>
)
