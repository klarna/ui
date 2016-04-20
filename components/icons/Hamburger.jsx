import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Hamburger = (hexColor, props) => (
  <Icon
    stroke={hexColor}
    strokeLinecap='round'
    strokeWidth='2'
    size='25px'
    viewBox='0 0 25 25'
    {...props}>
    {[8, 13, 18].map((y) => <line key={y} x1='6' x2='19' y1={y} y2={y} />)}
  </Icon>
)

export default icon(Hamburger)
