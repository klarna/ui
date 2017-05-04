import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'field-link'

function FieldLink (props) {
  const {
    id,
    label,
    onFieldLinkClick
  } = props

  const classNames = classNamesBind.bind({ ...defaultStyles })

  return (
    <span
      id={id}
      onClick={onFieldLinkClick}
      className={classNames(baseClass)}>
      {label}
    </span>
  )
}

FieldLink.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onFieldLinkClick: PropTypes.func
}

export default FieldLink
