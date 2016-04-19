import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Mail = (hexColor, props) => (
  <Icon
    fill='none'
    stroke={hexColor}
    strokeWidth='5'
    size='21px'
    {...props}>
    <rect x='12' y='22' width='76' height='56' rx='12' ry='12' />
    <line x1='12' y1='37' x2='51' y2='53' />
    <line x1='88' y1='37' x2='49' y2='53' />
  </Icon>
)

export default icon(Mail)
