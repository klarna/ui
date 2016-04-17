import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/dialog.scss'

const classNames = classNamesBind.bind(styles)

export default function Dialog ({ children, className, ...props }) {
  return (
    <div className={classNames('cui__dialog', className)} {...props}>
      {children}
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Dialog.Icon = ({ children, className, ...props }) => (
  <div className={classNames('cui__dialog__icon', className)} {...props}>
    {children}
  </div>
)

Dialog.Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Dialog.Content = ({ children, className, ...props }) => (
  <div className={classNames('cui__dialog__content', className)} {...props}>
    <div className={classNames('cui__dialog__content--inner')}>
      {children}
    </div>
  </div>
)

Dialog.Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Dialog.Footer = ({ children, className, ...props }) => (
  <div
    className={classNames('cui__dialog__footer', className)} {...props}>
    <div
      className={classNames('cui__dialog__footer--inner')}>
      {children}
    </div>
  </div>
)

Dialog.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
