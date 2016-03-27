import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/loader.scss'

const classNames = classNamesBind.bind(styles)

export default function Loader ({className, color, size}) {
  const cls = classNames('cui__loader', size, color, className)

  return <div className={cls} />
}

Loader.sizes = ['big', 'small', 'tiny']
Loader.colors = ['blue']

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Loader.colors),
  size: PropTypes.oneOf(Loader.sizes)
}
