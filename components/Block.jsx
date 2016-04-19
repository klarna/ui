import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/block.scss'

const classNames = classNamesBind.bind(styles)

export default function Block ({className, blue, children, ...remainingProps}) {
  const cls = classNames('cui__block', { blue }, className)

  return (
    <div className={cls}>
      {children}
    </div>
  )
}

Block.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}
