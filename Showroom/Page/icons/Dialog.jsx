import React from 'react'
import Base from './Base'

export default ({className}) => (
  <Base className={className} title='Dialog' circleFill='#EA6146'>
    <defs>
      <path d='M100 50c0 27.6-22.4 50-50 50S0 77.6 0 50 22.4 0 50 0s50 22.4 50 50' id='a'/>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='b' fill='#fff'>
        <use xlinkHref='#a'/>
      </mask>
      <rect fill='#293A4F' mask='url(#b)' x='5' y='45' width='50' height='40' rx='5'/>
      <path d='M93.5 16.5c1 1 1.5 2 1.5 3.5v60c0 2.8-2.2 5-5 5H45V55H5V20c0-2.8 2.2-5 5-5h80c1.4 0 2.6.6 3.5 1.5z' fill='#293A4F'/>
      <g transform='translate(25 27)'>
        <path d='M4.5 46C3 46 2 45 2 43.5v-41C2 1 3 0 4.5 0h43C49 0 50 1 50 2.5v41c0 1.4-1 2.5-2.5 2.5h-43z' fill='#FFF'/>
        <path d='M46 5.5l.7-.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.8.8-.8-.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.8.8-.7.8c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5 0 .7-.3l.8-.8.8.7c.2.2.4.3.7.3.3 0 .5 0 .7-.3.4-.4.4-1 0-1.4l-.8-.8z' fill='#EA6146'/>
        <path d='M15 46H4.5C3 46 2 45 2 43.5v-41C2 1 3 0 4.5 0H15v46z' fill='#EFF4F9' />
        <path d='M5 46H2.5C1 46 0 45 0 43.5v-41C0 1 1 0 2.5 0H5v46z' fill='#C3CFE2' />
        <rect fill='#4F627F' x='10' y='14' width='30' height='2' rx='1' />
        <rect fill='#C3CFE2' x='10' y='26' width='30' height='2' rx='1' />
        <rect fill='#C3CFE2' x='10' y='30' width='30' height='2' rx='1' />
        <rect fill='#C3CFE2' x='10' y='34' width='30' height='2' rx='1' />
      </g>
    </g>
  </Base>
)
