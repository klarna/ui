import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from 'ui-css-components/src/components/loader.scss'

const classNames = classNamesBind.bind(styles)

export default function Loader ({className, color, size}) {
  const cls = classNames(className, 'cui__loader', size, color)

  return <div className={ cls }></div>
}

Loader.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool
}
