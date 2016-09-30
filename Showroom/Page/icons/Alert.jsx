import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Button' circleFill='#17BBC3'>
    <Page />
    <g transform='translate(25 45)'>
      <rect fill='#70E0E0' x='1' y='1' width='48' height='28' rx='1'/>
      <path d='M0 2.5C0 1.13 1.1 0 2.5 0h45C48.88 0 50 1.12 50 2.5v25c0 1.38-1.1 2.5-2.5 2.5h-45C1.12 30 0 28.88 0 27.5v-25zM2 3c0-.55.46-1 1-1h44c.55 0 1 .45 1 1v24c0 .55-.46 1-1 1H3c-.55 0-1-.45-1-1V3z' fill='#17BBC3'/>
      <path d='M5 22c0-.55.45-1 1-1h38c.55 0 1 .44 1 1 0 .55-.45 1-1 1H6c-.55 0-1-.44-1-1zm0-4c0-.55.45-1 1-1h38c.55 0 1 .44 1 1 0 .55-.45 1-1 1H6c-.55 0-1-.44-1-1z' fill='#007F8C'/>
      <rect fill='#007F8C' x='10' y='10' width='30' height='2' rx='1'/>
    </g>
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>
  </Base>
)
