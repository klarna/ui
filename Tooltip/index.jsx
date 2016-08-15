import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'tooltip'

export const arrows = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'left', 'left-top', 'left-bottom',
  'right', 'right-top', 'right-bottom'
]

export default function Tooltip ({ className, arrow, children, border, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div 
      className={classNames(baseClass, arrow, className, { border })}>
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.oneOf(arrows),
  children: PropTypes.node,
  border: PropTypes.bool,
  styles: PropTypes.object
}
