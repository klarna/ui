import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'banner'

const classes = {
  altLink: `${baseClass}__alt-link`,
  link: `${baseClass}__link`
}

function TermsBanner ({
  altLink,
  id,
  logo,
  link,
  onLinkClick,
  onAltLinkClick,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles })
  const ids = id
    ? {
      link: `${id}__link`,
      altLink: `${id}__alt-link`,
      logoWrapper: `${id}__logo-wrapper`,
      altLinkWrapper: `${id}__alt-link-wrapper`,
      linkWrapper: `${id}__link-wrapper`
    } : {}

  return (
    <div
      id={id}
      className={classNames(baseClass)}
      {...props}
    >
      <div id={ids.logoWrapper}>
        {logo}
      </div>
      {onAltLinkClick && <div id={ids.altLinkWrapper}>
          <span
            id={ids.altLink}
            className={classNames(classes.altLink)}
            onClick={onAltLinkClick}>
            {altLink}
          </span>
        </div>
      }
      {onLinkClick && <div id={ids.linkWrapper}>
          <span
            id={ids.link}
            className={classNames(classes.link)}
            onClick={onLinkClick}>
            {link}
          </span>
        </div>
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
