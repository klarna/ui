import React, { PropTypes } from 'react'
import defaultStyles from '../styles.scss'

export default function Price ({ children }) {
  return (
    <span className={defaultStyles['button__price']}>
      {children}
    </span>
  )
}

Price.displayName = 'Button.Price'

Price.propTypes = {
  children: PropTypes.node
}
