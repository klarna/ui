import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withOverrideFromContext} from '@klarna/higher-order-components'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'field-link'

function FieldLink (props) {
  const {
    id,
    label,
    onFieldLinkClick,
    styles
  } = props

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <span
      id={id}
      onClick={onFieldLinkClick}
      className={classNames(baseClass)}>
      {label}
    </span>
  )
}

FieldLink.displayName = 'FieldLink'

FieldLink.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onFieldLinkClick: PropTypes.func,
  styles: PropTypes.object
}

export default compose(
  setDisplayName('FieldLink'),
  withOverrideFromContext
)(FieldLink)
