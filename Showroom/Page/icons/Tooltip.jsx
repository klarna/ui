import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Tooltip' circleFill='#434B7C'>
    <Page />
    {[37, 41, 45].map((y, i) => <rect
      key={i}
      fill='#C3CFE2'
      x='30'
      y={y}
      width='40'
      height='2'
      rx='1'
    />)}

    <g transform='translate(25 56)'>
      <path d='M30 4L26.763.763c-.97-.97-2.552-.974-3.526 0L20 4h10zM0 6.493C0 5.116 1.114 4 2.497 4h45.006C48.883 4 50 5.118 50 6.493v15.014C50 22.884 48.886 24 47.503 24H2.497C1.117 24 0 22.882 0 21.507V6.493z' fill='#434B7C'/>
      <rect fill='#EFF4F9' x='10' y='11' width='30' height='2' rx='1'/>
      <rect fill='#EFF4F9' x='15' y='15' width='20' height='2' rx='1'/>
    </g>
  </Base>
)
