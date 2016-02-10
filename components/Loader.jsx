import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from 'ui-css-components/src/components/loader.scss'

export default function Loader ({className, small}) {
  const cls = classnames(className, {
    'cui__loader': !small,
    'cui__loader--small': small
  })

  return <div className={ cls }></div>
}

Loader.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool
}
