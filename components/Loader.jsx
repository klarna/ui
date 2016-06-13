import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/loader.scss'

export default function Loader ({ className, color, size, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('cui__loader', size, color, className)

  return <div className={cls} />
}

Loader.sizes = ['big', 'small', 'tiny']
Loader.colors = ['blue', 'white']

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Loader.colors),
  size: PropTypes.oneOf(Loader.sizes),
  styles: PropTypes.object
}
