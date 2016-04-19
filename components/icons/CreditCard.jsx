import React, { PropTypes } from 'react'
import Amex from './cards/Amex'
import Discover from './cards/Discover'
import Maestro from './cards/Maestro'
import Mastercard from './cards/Mastercard'
import Visa from './cards/Visa'
import VisaElectron from './cards/VisaElectron'

const brands = {
  amex: Amex,
  discover: Discover,
  maestro: Maestro,
  master: Mastercard,
  visa: Visa,
  visaelectron: VisaElectron
}

const CreditCard = ({ brand, ...props }) => {
  const Brand = brands[brand]
  if (!Brand) {
    return <span>{brand}</span>
  }

  return <Brand {...props} />
}

CreditCard.brands = Object.keys(brands)

CreditCard.propTypes = {
  brand: PropTypes.oneOf(CreditCard.brands)
}

export default CreditCard
