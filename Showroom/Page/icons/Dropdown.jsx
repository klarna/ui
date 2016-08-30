import React from 'react'
import Base, {Page} from './Base'

export default () => (
  <Base title='Dropdown' circleFill='#EED419'>
    <Page />
    <g transform='translate(25 30)'>
      <rect fill='none' rx='1' stroke='#EED419' strokeWidth='2' x='1' y='12' width='48' height='43' />
      <rect fill='#EED419' x='41' y='15' width='5' height='2' rx='1' />
      <g fill='#C3CFE2'>
        {
          [18, 27, 36, 45].map((y) => <rect x='6' y={y} width='4' height='4' rx='2' />)
        }
        <rect y='4' width='35' height='2' rx='1'/>
      </g>
      <g fill='#4F627F'>
        <rect x='15' y='19' width='20' height='2' rx='1' />
        <rect x='15' y='28' width='25' height='2' rx='1' />
        <rect x='15' y='37' width='20' height='2' rx='1' />
        <rect x='15' y='46' width='20' height='2' rx='1' />
        <rect width='25' height='2' rx='1' />
      </g>
    </g>
  </Base>
)
