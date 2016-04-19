import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Letter = (hexColor, props) => (
  <Icon viewBox='0 0 100 100' height='100px' width='100px' strokeWidth='2' stroke={hexColor} fill='none' {...props}>
    <rect x='20' y='36' width='60' height='40' rx='4' ry='4' />
    <path d='M20,42L51,63L80.2,42' />
    <line x1='20' y1='74' x2='44' y2='59' />
    <line x1='80' y1='74' x2='56' y2='59' />
  </Icon>
)

export default icon(Letter)
