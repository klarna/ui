import React from 'react'
import Icon, { icon } from './Icon.jsx'
import Circle from './parts/Circle.jsx'

const Error = (hexColor, props) => (
  <Icon stroke={hexColor} strokeWidth='2' {...props}>
    <Circle />
    <line x1='38' y1='38' x2='62' y2='62' />
    <line x1='38' y1='62' x2='62' y2='38' />
  </Icon>
)

export default icon(Error)
