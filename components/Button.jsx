import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from 'ui-toolkit/src/components/button.scss'

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
    loading && <div className={ styles[`cui__button--${design}__loader`] } /> ||
    children

  const cls = classnames(className, styles[`cui__button--${design}`], styles[`-${size}`], {
    [styles['success']]: success
  })

  return (
    <button className={cls} disabled={loading || success} {...remainingProps}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  design: 'primary',
  loading: false,
  size: 'normal'
}

Button.designs = ['primary', 'secondary']
Button.sizes = ['small', 'normal', 'big']

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Button.designs),
  size: PropTypes.oneOf(Button.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool
}
