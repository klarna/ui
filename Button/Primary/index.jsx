import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import {withOverrideFromContext, withTheme} from '@klarna/higher-order-components'
import { withPropsFromContext } from 'react-context-props'
import classNamesBind from 'classnames/bind'
import parseColor from 'parse-color'

import Loader from '../../Loader'
import Price from '../Price'
import contains from '../../lib/contains'
import brandVolumeLevels from '../../lib/brandVolumeLevels'
import childrenPropType from '../../propTypes/children'
import defaultStyles from '../styles.scss'

const baseClass = 'button'

const classes = {
  darkening: `${baseClass}--primary__darkening`,
  primary: `${baseClass}--primary`,
  label: `${baseClass}__label`
}

export const sizes = ['small', 'big']

function Primary ({
  brandVolume,
  children,
  className,
  customize,
  disabled,
  href,
  id,
  loading,
  responsive,
  size,
  style,
  styles,
  success,
  target,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.primary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children),
    'brand-volume-high': brandVolume === 'high',
    'responsive': responsive
  }, className)

  const loaderColor = (customize || {}).textColor && (customize || {}).backgroundColor
    ? parseColor(customize.textColor).rgb
    : 'white'

  const content = (success ? '✔' : children)

  const loadingOrContent =
    <span>
      <div className={loading ? classNames('visibilityHidden') : ''}>
        {content}
      </div>
      {loading ? <Loader inline color={loaderColor} /> : null}
    </span>

  const customizations = customize
    ? {
      color: customize.textColor,
      backgroundColor: customize.backgroundColor,
      borderColor: customize.backgroundColor,
      borderRadius: customize.borderRadius
    } : {}

  const ids = id
    ? {
      darkening: `${id}__darkening`,
      label: `${id}__label`
    } : {}

  const markup = href || target
    ? <a
      className={cls}
      disabled={loading || success || disabled}
      id={id}
      href={href}
      target={target}
      style={{
        ...customizations,
        ...style
      }}
      {...remainingProps}>
      {customize ? [
        <span
          key={1}
          className={classNames(classes.label)}
          id={ids.label}>
          {loadingOrContent}
        </span>,
        loading || disabled || <div key={2}
          className={classNames(classes.darkening)}
          id={ids.darkening}
          style={{borderRadius: customize.borderRadius}}
        />
      ]
      : loadingOrContent}
    </a>
    : <button
      className={cls}
      disabled={loading || success || disabled}
      id={id}
      style={{
        ...customizations,
        ...style
      }}
      {...remainingProps}>
      {customize ? [
        <span
          key={1}
          className={classNames(classes.label)}
          id={ids.label}>
          {loadingOrContent}
        </span>,
        loading || disabled || <div key={2}
          className={classNames(classes.darkening)}
          id={ids.darkening}
          style={{borderRadius: customize.borderRadius}}
        />
      ]
      : loadingOrContent}
    </button>

  return markup
}

Primary.displayName = 'Button.Primary'

Primary.defaultProps = {
  brandVolume: 'low',
  loading: false,
  success: false,
  disabled: false
}

Primary.propTypes = {
  brandVolume: PropTypes.oneOf(brandVolumeLevels),
  children: childrenPropType,
  className: PropTypes.string,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  styles: PropTypes.object,
  success: PropTypes.bool,
  target: PropTypes.string
}

export default compose(
  withPropsFromContext(['brandVolume']),
  withTheme((customizations, { customize }) => ({
    customize: {
      backgroundColor: customizations.color_button,
      borderRadius: customizations.radius_border,
      textColor: customizations.color_button_text,
      ...customize
    }
  })),
  withOverrideFromContext
)(Primary)
