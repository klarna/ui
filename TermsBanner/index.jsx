import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

function TermsBanner ({
  altLink,
  id,
  logo,
  link,
  onLinkClick,
  onAltLinkClick,
  styleSheet,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles })
  const ids = id
    ? {
      link: `${id}__link`,
      altLink: `${id}__alt-link`
    } : {}

  return (
    <div
      id={id}
      className={classNames('banner')}
      style={stylesheet.TermsBanner}
      {logo}
      {onAltLinkClick && <span
        id={ids.altLink}
        className={classNames(classes.altLink)}
        onClick={onAltLinkClick}>
        {altLink}
        </span>
      }
      {onLinkClick && <span
        id={ids.link}
        className={classNames(classes.link)}
        onClick={onLinkClick}>
        {link}
        </span>
      }
    </div>
  )
}

TermsBanner.propTypes = {
  altLink: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  onLinkClick: PropTypes.func,
  onAltLinkClick: PropTypes.func
}

export default TermsBanner
