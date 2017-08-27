import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withOverrideFromContext} from '@klarna/higher-order-components'
import defaultStyles from './styles.scss'

const baseClass = 'banner'

const classes = {
  altLink: `${baseClass}__alt-link`,
  link: `${baseClass}__link`,
  logoWrapper: `${baseClass}__logo-wrapper`,
  altLinkWrapper: `${baseClass}__alt-link-wrapper`,
  linkWrapper: `${baseClass}__link-wrapper`
}

function TermsBanner ({
  altLink,
  id,
  logo,
  link,
  onLinkClick,
  onAltLinkClick,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const ids = id
    ? {
      link: `${id}__link`,
      altLink: `${id}__alt-link`
    } : {}

  return (
    <div
      id={id}
      className={classNames(baseClass)}
      {...props}
    >
      <div className={classNames(classes.logoWrapper)}>{logo}</div>
      {onAltLinkClick && <div className={classNames(classes.altLinkWrapper)}>
        <span
          id={ids.altLink}
          className={classNames(classes.altLink)}
          onClick={onAltLinkClick}>
          {altLink}
        </span>
      </div>
      }
      {onLinkClick && <div className={classNames(classes.linkWrapper)}>
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

TermsBanner.displayName = 'TermsBanner'

TermsBanner.propTypes = {
  altLink: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  onLinkClick: PropTypes.func,
  onAltLinkClick: PropTypes.func,
  styles: PropTypes.object
}

export default compose(
  setDisplayName('TermsBanner'),
  withOverrideFromContext
)(TermsBanner)
