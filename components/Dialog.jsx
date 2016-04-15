import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/dialog.scss'

const classNames = classNamesBind.bind(styles)

export function Dialog ({ children }) {
  return (
    <div
      className={classNames('cui__dialog')}>
      {children}
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node
}

export function DialogContent ({ children }) {
  return (
    <div
      className={classNames('cui__dialog__content')}>
      <div
        className={classNames('cui__dialog__content--inner')}>
        {children}
      </div>
    </div>
  )
}

DialogContent.propTypes = {
  children: PropTypes.node
}

export function DialogFooter ({ children }) {
  return (
    <div
      className={classNames('cui__dialog__footer')}>
      <div
        className={classNames('cui__dialog__footer--inner')}>
        {children}
      </div>
    </div>
  )
}

DialogFooter.propTypes = {
  children: PropTypes.node
}
