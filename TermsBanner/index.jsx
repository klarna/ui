import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'banner'

const classes = {
  link: `${baseClass}__link`,
  altLink: `${baseClass}__alt-link`
}

function TermsBanner (props) {
  const {
    id,
    logo,
    link,
    altLink,
    onLinkClick,
    onAltLinkClick
  } = props

  const classNames = classNamesBind.bind({ ...defaultStyles })

  return (
    <div
      id={id}
      className={classNames(baseClass)}>
      {logo}
      <span className={classNames(classes.altLink)} onClick={onAltLinkClick}>{altLink}</span>
      <span className={classNames(classes.link)} onClick={onLinkClick}>{link}</span>
    </div>
  )
}

TermsBanner.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  altLink: PropTypes.string,
  onLinkClick: PropTypes.func,
  onAltLinkClick: PropTypes.func
}

export default TermsBanner
