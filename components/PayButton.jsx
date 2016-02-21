import React, { PropTypes } from 'react'
import styles from 'ui-css-components/src/components/button.scss'
import Button from './Button'

export default function PayButton (props) {
  const { price, children, ...remainingProps } = props

  return (
    <Button className={ styles['has-price'] } {...remainingProps}>
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
