import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Password = (hexColor, props) => (
  <Icon
    stroke={hexColor}
    strokeWidth='5'
    size='20px'
    fill='none'
    {...props}>
    <rect x='20' y='35' width='60' height='45' rx='6' />
    <rect x='49' y='50' width='1' height='15' rx='6' />
    <rect style={{strokeDashoffset: 35}} strokeDasharray='68,84' strokeLinecap='round' x='32.5' y='10' width='35' height='45' rx='8' />
  </Icon>
)

export default icon(Password)
