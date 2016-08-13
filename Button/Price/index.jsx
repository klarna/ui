import React, { PropTypes } from 'react'
import defaultStyles from '../styles.scss'

export default function Price (props) {
  return (
    <span className={defaultStyles['button__price']}>
      {props.children}
    </span>
  )
}

Price.displayName = 'Button.Price'
