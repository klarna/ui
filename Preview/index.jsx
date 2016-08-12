import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Preview ({ className, children, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('preview', className)

  return (
    <div className={cls}>
      <div className={classNames('preview__content')}>
        {children}
      </div>
    </div>
  )
}

Preview.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function PreviewTitle ({ children, className, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('preview__title', className)

  return (
    <h2 className={cls}>
      {children}
    </h2>
  )
}

PreviewTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function PreviewLink ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('preview__footer__link', className)

  return (
    <div className={classNames('preview__footer')}>
      <a className={cls} {...remainingProps}>
        {children}
      </a>
    </div>
  )
}

PreviewLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}
