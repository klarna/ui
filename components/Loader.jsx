import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from 'ui-css-components/src/components/loader.scss'

const classNames = classNamesBind.bind(styles)

export default function Loader ({className, color, size}) {
  const cls = classNames(className, 'cui__loader', size, color)

  return <div className={ cls }></div>
}

Loader.sizes = ['big', 'small', 'tiny']
Loader.colors = ['blue']

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Loader.colors),
  size: PropTypes.oneOf(Loader.sizes)
}
