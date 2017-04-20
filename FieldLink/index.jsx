import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'field-link'

class FieldLink extends React.Component {
  propTypes: {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onFieldLinkClick: PropTypes.func
  }

  render () {
    const {
      id,
      label,
      onFieldLinkClick
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles })

    return (
      <a
        href='#'
        id={id}
        onClick={onFieldLinkClick}
        className={classNames(baseClass)}>
        {label}
      </a>
    )
  }
}

export default FieldLink
