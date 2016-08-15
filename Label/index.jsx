import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'label'

export const designs = [
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

export default function Label ({
  children,
  className,
  design,
  outline,
  inverted,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <span
      className={classNames(baseClass, design, { outline, inverted }, className)}
      {...props}>
      {children}
    </span>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Label.designs),
  inverted: PropTypes.bool,
  outline: PropTypes.bool,
  styles: PropTypes.object
}
