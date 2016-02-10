import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from 'ui-css-components/src/components/button.scss'

const classNames = classNamesBind.bind(styles)

export default function Button (props) {
  const {
    className,
    design,
    loading,
    children,
    size,
    success,
    ...remainingProps } = props

  const content =
    success && '✔' ||
    loading && <div className={ classNames(`cui__button--${design}__loader`) } /> ||
    children

  const cls = classNames(className, `cui__button--${design}`, size)

  return (
    <button className={cls} disabled={loading || success} {...remainingProps}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  design: 'primary',
  loading: false,
  success: false
}

Button.designs = ['primary', 'secondary']
Button.sizes = ['small', 'big']

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Button.designs),
  size: PropTypes.oneOf(Button.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool
}
