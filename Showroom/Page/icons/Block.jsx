import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Block' circleFill='#225366'>
    <Page />

    <rect fill='#4F627F' x='25' y='30' width='20' height='2' rx='1'/>
    <path d='M25 42c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H26c-.55 0-1-.44-1-1zm0 4c0-.55.45-1 1-1h38c.55 0 1 .44 1 1 0 .55-.45 1-1 1H26c-.55 0-1-.44-1-1zm0-8c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H26c-.55 0-1-.44-1-1z' fill='#C3CFE2'/>
    <g transform='translate(20 57)'>
      <rect fill='#225366' width='60' height='23' rx='2.5'/>
      <rect fill='#EFF4F9' x='5' y='5' width='40' height='2' rx='1'/>
      <path d='M5 17c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H6c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h48c.55 0 1 .44 1 1 0 .55-.45 1-1 1H6c-.55 0-1-.44-1-1z' fill='#EFF4F9'/>
    </g>
  </Base>
)
