import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import childrenPropType from '../propTypes/children'

const baseClass = 'amount-text'

export default function Amount ({ children, className, color, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <p
      className={classNames(baseClass, color, className)}
      {...remainingProps}>
      {children}
    </p>
  )
}

Amount.defaultProps = {
  color: 'black'
}

Amount.propTypes = {
  color: PropTypes.oneOf(palette),
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}
