import React from 'react'
import Icon, { icon } from './Icon.jsx'
import Circle from './parts/Circle.jsx'

const Time = (hexColor, props) => (
  <Icon
    fill='none'
    stroke={hexColor}
    strokeWidth='2'
    strokeLinecap='round'
    {...props}>
    <Circle />
    <path d='M47,28.5l0,25.5l25.5,0' />
  </Icon>
)

export default icon(Time)
