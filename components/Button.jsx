import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/button.scss'

const classNames = classNamesBind.bind(styles)

export default function Button (props) {
  const {
    className,
    design,
    loading,
    children,
    size,
    success,
    disabled,
    ...remainingProps } = props

  const content =
    success && '✔' || !loading && children

  const cls = classNames(`cui__button--${design}`, size, {
    'is-disabled': disabled,
    'is-loading': loading
  }, className)

  return (
    <button className={cls} disabled={loading || success || disabled} {...remainingProps}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  design: 'primary',
  loading: false,
  success: false,
  disabled: false
}

Button.designs = ['primary', 'secondary']
Button.sizes = ['small', 'big']

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Button.designs),
  size: PropTypes.oneOf(Button.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool
}
