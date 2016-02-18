import React from 'react'
import Icon, { defaultProps, propTypes } from '../Icon'

const LockIcon = (props) => (
  <Icon {...props}>
    <rect x='20' y='35' width='60' height='45' rx='6' />
    <rect x='49' y='50' width='1' height='15' rx='6' />
    <rect style={{strokeDashoffset: 16}} strokeDasharray='54,72' strokeLinecap='round' x='32.5' y='10' width='35' height='45' rx='8' />
  </Icon>
)

LockIcon.defaultProps = defaultProps
LockIcon.propTypes = propTypes

export default LockIcon
