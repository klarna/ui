import React, { PropTypes } from 'react'
import defaultStyles from '../styles.scss'

export default function Price ({ children, ...props }) {
  return (
    <span className={defaultStyles['button__price']} {...props}>
      {children}
    </span>
  )
}

Price.displayName = 'Button.Price'

Price.propTypes = {
  children: PropTypes.node
}
