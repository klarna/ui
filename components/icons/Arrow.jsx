import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Arrow = (hexColor, props) => (
  <Icon stroke={hexColor}
    size='21px'
    viewBox='0 0 21 21'
    {...props}>
    <path
      d='M6.5,9.3l4,4l4,-4'
      fill='none'
      strokeLinecap='round' />
  </Icon>
)

export default icon(Arrow)
