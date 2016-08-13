import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'block'

export default function Block ({className, blue, children, styles, ...remainingProps}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, { blue }, className)}
      {...remainingProps}>
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
