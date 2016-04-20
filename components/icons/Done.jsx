import React from 'react'
import Icon, { icon } from './Icon.jsx'
import Circle from './parts/Circle.jsx'

const Done = (hexColor, props) => (
  <Icon
    fill='none'
    stroke={hexColor}
    strokeWidth='2'
    strokeLinecap='round'
    {...props}>
    <Circle />
    <path d='M34.5,54l9.5,7.5l21.5,-23' />
  </Icon>
)

export default icon(Done)
