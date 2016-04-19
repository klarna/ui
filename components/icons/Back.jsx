import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Back = (hexColor, props) => (
  <Icon
    stroke={hexColor}
    size='25px'
    viewBox='0 0 25 25'
    {...props}>
    <path
      strokeLinecap='round'
      strokeWidth='2'
      fill='none'
      d='M15,6l-6.5,6.5l6.5,6.5' />
  </Icon>
)

export default icon(Back)
