import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

const classNames = classNamesBind.bind(styles)

export default function Subtitle ({ children, className, color, condensed, ...props }) {
  const cls = classNames('cui__subtitle', color, className, { condensed })

  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  )
}

Subtitle.defaultProps = {
  color: 'black',
  condensed: false
}

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette)
}
