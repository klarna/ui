import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

const classNames = classNamesBind.bind(styles)

export default function SecondaryTitle ({ className, color, condensed, children, ...props }) {
  const cls = classNames('cui__title--secondary', color, className, { condensed })

  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  )
}

SecondaryTitle.defaultProps = {
  color: 'black',
  condensed: false
}

SecondaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool
}
