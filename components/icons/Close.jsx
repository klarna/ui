import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Close = (hexColor, props) => (
  <Icon
    stroke={hexColor}
    strokeLinecap='round'
    strokeWidth='2'
    size='25px'
    viewBox='0 0 25 25'
    {...props}>
    {[45, -45].map((deg) => (
      <line key={deg} style={{transformOrigin: '50% 50%', transform: `rotate(${deg}deg)`}} x1='3.3' x2='21.7' y1='12.5' y2='12.5' />
    ))}
  </Icon>
)

export default icon(Close)
