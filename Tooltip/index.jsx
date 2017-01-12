import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

const baseClass = 'tooltip'

export const arrows = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'left', 'left-top', 'left-bottom',
  'right', 'right-top', 'right-bottom'
]

export default function Tooltip ({ className, arrow, children, inverse, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (<div
    className={classNames(baseClass, arrow, className, { inverse })} {...props}>
    {children}
  </div>)
}

Tooltip.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.oneOf(arrows),
  children: childrenPropType,
  id: PropTypes.string,
  inverse: PropTypes.bool,
  styles: PropTypes.object
}
