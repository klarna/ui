import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Question = (hexColor, props) => (
  <Icon
    fill={hexColor}
    size='21px'
    viewBox='0 0 21 21'
    {...props}>
    <circle cx='10.5' cy='10.5' r='7' stroke={hexColor} strokeWidth='1' fill='none' />
    <circle cx='10.5' cy='14.5' r='0.5' stroke='none' />
    <g transform='translate(3, 3)'>
      <path
        d='M7.5,3 C6.747,3 6.16,3.30 5.88,3.48 C5.62,3.65 5.29,3.97 5.11,4.18 C4.94,4.4 4.97,4.71 5.18,4.89 C5.4,5.06 5.71,5.03 5.89,4.82 C6.02,4.65 6.28,4.41 6.42,4.32 C6.61,4.20 7,4 7.5,4 C8.38,4 9,4.49 9,5.2 C9,5.755 8.77,6.15 8.19,6.61 L8.04,6.725 C7.6,7.05 7,7.51 7,8.6 L7,9.5 C7,9.78 7.22,10 7.5,10 C7.78,10 8,9.78 8,9.5 L8,8.6 C8,8 8.24,7.82 8.64,7.52 L8.81,7.39 C9.63,6.75 10,6.07 10,5.2 C10,3.925 8.95,3 7.5,3' />
    </g>
  </Icon>
)

export default icon(Question)
