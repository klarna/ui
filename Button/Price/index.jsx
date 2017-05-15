import React from 'react'
import PropTypes from 'prop-types'
import defaultStyles from '../styles.scss'
import childrenPropType from '../../propTypes/children'

export default function Price ({ children, ...props }) {
  return (
    <span className={defaultStyles['button__price']} {...props}>
      {children}
    </span>
  )
}

Price.displayName = 'Button.Price'

Price.propTypes = {
  children: childrenPropType,
  id: PropTypes.string
}
