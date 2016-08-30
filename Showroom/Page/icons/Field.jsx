import React from 'react'
import Base, {Page} from './Base'

export default () => (
  <Base title='Field' circleFill='#31A592'>
    <Page />
    <g transform='translate(25 42)'>
      <path d='M0 2.5C0 1 1 0 2.5 0h45C49 0 50 1 50 2.5V14H0V2.5zM2 3c0-.6.5-1 1-1h44c.6 0 1 .5 1 1v9H2V3z' fill='#EFF4F9'/>
      <rect fill='#C3CFE2' x='12' y='4' width='20' height='2' rx='1'/>
      <rect fill='#C3CFE2' x='4' y='4' width='6' height='6' rx='3'/>
      <rect fill='#4F627F' x='12' y='8' width='25' height='2' rx='1'/>
    </g>
    <g transform='translate(25 54)'>
      <path d='M0 0h50v14H0V0zm2 2h46v10H2V2z' fill='#EFF4F9'/>
      <rect fill='#C3CFE2' x='12' y='4' width='15' height='2' rx='1'/>
      <rect fill='#C3CFE2' x='4' y='4' width='6' height='6' rx='3'/>
      <rect fill='#4F627F' x='12' y='8' width='15' height='2' rx='1'/>
    </g>
    <g transform='translate(25 66)'>
      <path fill='#CEFAB1' d='M1 1h48v12H1z'/>
      <path d='M0 0h50v11.5c0 1.4-1 2.5-2.5 2.5h-45C1 14 0 13 0 11.5V0zm2 2h46v9c0 .6-.5 1-1 1H3c-.6 0-1-.5-1-1V2z' fill='#31A592'/>
      <rect fill='#31A592' x='12' y='4' width='20' height='2' rx='1'/>
      <rect fill='#31A592' x='4' y='4' width='6' height='6' rx='3'/>
      <rect fill='#4F627F' x='12' y='8' width='30' height='2' rx='1'/>
    </g>
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>
  </Base>
)
