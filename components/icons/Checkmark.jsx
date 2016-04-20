import React from 'react'
import Icon, { icon } from './Icon'

const Checkmark = (hexColor, props) => {
  return (
    <Icon
      stroke={hexColor}
      strokeLinecap='round'
      strokeWidth='2'
      size='25px'
      viewBox='0 0 25 25'
      fill='none'
      {...props}>
      <path d='M5 13.69l4.49 4.23L19.37 8'/>
    </Icon>
  )
}

export default icon(Checkmark)
