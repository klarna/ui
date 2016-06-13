import React, { PropTypes } from 'react'
import defaultStyles from '@klarna/ui-css-components/src/components/button.scss'
import Button from './Button'
import classNamesBind from 'classnames/bind'

export default function PayButton ({
  price,
  children,
  className,
  loading,
  styles,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(loading || 'has-price', className)

  return (
    <Button className={cls} loading={loading} {...remainingProps}>
      {children}
      <span className={classNames('cui__button__price')}>
        {price}
      </span>
    </Button>
  )
}

PayButton.defaultProps = Button.defaultProps

PayButton.propTypes = {
  ...Button.propTypes,
  price: PropTypes.string.isRequired
}
