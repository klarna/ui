import React from 'react'
import Icon, { icon } from './Icon.jsx'

const Options = (hexColor, props) => (
  <Icon
    fill={hexColor}
    size='25px'
    stroke='none'
    viewBox='0 0 25 25'
    {...props}>
    {[7, 13, 19].map((y) => <circle key={y} cx='12' cy={y} r='2' />)}
  </Icon>
)

export default icon(Options)
