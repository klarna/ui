import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Block ({className, blue, children, styles, ...remainingProps}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('block', { blue }, className)

  return (
    <div className={cls} {...remainingProps}>
      {children}
    </div>
  )
}

Block.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
