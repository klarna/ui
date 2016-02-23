import React, { PropTypes } from 'react'
import styles from 'ui-css-components/src/components/button.scss'
import Button from './Button'
import classNamesBind from 'classnames/bind'

const classNames = classNamesBind.bind(styles)

export default function PayButton (props) {
  const { price, children, className, ...remainingProps } = props
  const cls = classNames('has-price', className)

  return (
    <Button className={ cls } {...remainingProps}>
      {children}
      <span className={ styles['cui__button__price'] }>
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
