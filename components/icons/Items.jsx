import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Items = (hexColor, props) => (
  <Icon
    stroke={hexColor}
    fill='none'
    strokeLinecap='round'
    strokeWidth='1'
    size='22px'
    viewBox='0 0 22 22'
    {...props}>
    {[6.5, 11.5, 16.5].map((y) => (
      <g key={y}>
        <circle r='1.5' cx='5' cy={y} />
        <line x1='9.2' x2='19.5' y1={y} y2={y} />
      </g>
    ))}
  </Icon>
)

export default icon(Items)
