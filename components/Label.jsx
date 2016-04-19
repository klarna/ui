import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/label.scss'

const classNames = classNamesBind.bind(styles)

export default function Label ({ children, className, design, outline, inverted, ...props }) {
  const cls = classNames('cui__label', design, className, {
    outline,
    inverted
  })

  return (
    <span className={cls} {...props}>
      {children}
    </span>
  )
}

Label.designs = [
  'information',
  'warning',
  'notice',
  'success',
  'brown',
  'purple',
  'light-blue',
  'ultramarine',
  'yellow',
  'grey',
  'black'
]

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Label.designs),
  inverted: PropTypes.bool,
  outline: PropTypes.bool
}
