import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/preview.scss'

const classNames = classNamesBind.bind(styles)

export default function Preview ({ className, children }) {
  const cls = classNames('cui__preview', className)

  return (
    <div className={cls}>
      <div className={styles['cui__preview__content']}>
        {children}
      </div>
    </div>
  )
}

Preview.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export function PreviewTitle ({ children, className }) {
  const cls = classNames('cui__preview__title', className)

  return (
    <h2 className={cls}>
      {children}
    </h2>
  )
}

PreviewTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export function PreviewLink (props) {
  const {
    children,
    className,
    ...remainingProps } = props

  const cls = classNames('cui__preview__footer__link', className)

  return (
    <div className={styles['cui__preview__footer']}>
      <a className={cls} {...remainingProps}>
        {children}
      </a>
    </div>
  )
}

PreviewLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
