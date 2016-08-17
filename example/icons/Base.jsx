import React from 'react'

export default ({children, title, circleFill}) => (
  <svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <title>{title}</title>
    <g fill='none' fillRule='evenodd'>
      <circle cx='50' cy='50' r='50' fill='#EFF4F9' />
      {children}
    </g>
    <circle fill={circleFill} cx='90' cy='15' r='10'/>
  </svg>
)

export const Page = () => (
  <g>
    <path d='M87.5 10H25v83.294C32.356 97.55 40.89 100 50 100h40V12.5c0-1.38-1.12-2.5-2.5-2.5' fill='#FFF'/>
    <path d='M14.5 10c-1.38 0-2.5 1.12-2.5 2.5L11 50v10l-1 20c4.04 5.38 9.15 9.908 15 13.294V10H14.5z' fill='#EFF4F9'/>
    <path d='M12.5 10c-1.38 0-2.5 1.12-2.5 2.5V80c1.52 2.025 3.196 3.925 5 5.694V10h-2.5z' fill='#C3CFE2'/>
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1'/>
  </g>
)
