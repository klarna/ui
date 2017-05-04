import React, { PropTypes } from 'react'
import compose from 'ramda/src/compose'
import parseColor from 'parse-color'
import {overridable, themeable} from '@klarna/higher-order-components'
import { withPropsFromContext } from 'react-context-props'
import classNamesBind from 'classnames/bind'

import Loader from '../../Loader'
import Price from '../Price'
import contains from '../../lib/contains'
import brandVolumeLevels from '../../lib/brandVolumeLevels'
import defaultStyles from '../styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'button'

const classes = {
  darkening: `${baseClass}--tertiary__darkening`,
  tertiary: `${baseClass}--tertiary`,
  label: `${baseClass}__label`,
  labelAlt: `${baseClass}__label--alt`
}

export const sizes = ['small', 'big']

function addTransparency (color) {
  const rgb = parseColor(color).rgb
  return rgb ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.05)` : color
}

function Tertiary (props) {
  const {
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
    ...remainingProps } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.tertiary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children),
    'brand-volume-high': brandVolume === 'high',
    'responsive': responsive
  }, className)

  const isDisabled = (loading || success || disabled)

  const loaderColor = (customize || {}).backgroundColor
    ? parseColor(customize.backgroundColor).rgb
    : 'blue'

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
      color: customize.backgroundColor,
      backgroundColor: loading ? undefined : addTransparency(customize.backgroundColor),
      borderColor: customize.backgroundColor,
      borderRadius: customize.borderRadius
    } : {}

  const ids = id
    ? {
      darkening: `${id}__darkening`,
      label: `${id}__label`,
      labelAlt: `${id}__label--alt`
    } : {}

  const markup = href || target
    ? <a
      className={cls}
      id={id}
      disabled={isDisabled}
      href={href}
      style={{
        ...customizations,
        ...style
      }}
      target={target}
      {...remainingProps}>
      {
        customize ? [
          loading || <div key={1}
            className={classNames(classes.darkening)}
            style={customize && {
              borderRadius: `${parseInt(customize.borderRadius, 10) - 1}px`
            }}
          />,
          <div key={2} className={classNames(classes.label)}>
            {loadingOrContent}
            {
              isDisabled || <span
                className={classNames(classes.labelAlt)}
                id={ids.labelAlt}
                title={content}
                style={{color: customize.backgroundColor}}
              />
            }
          </div>
        ]
        : loadingOrContent
      }
    </a>
    : <button
      className={cls}
      id={id}
      disabled={isDisabled}
      style={{
        ...customizations,
        ...style
      }}
      {...remainingProps}>
      {
        customize ? [
          loading || <div key={1}
            className={classNames(classes.darkening)}
            style={customize && {
              borderRadius: `${parseInt(customize.borderRadius, 10) - 1}px`
            }}
          />,
          <div key={2} className={classNames(classes.label)}>
            {loadingOrContent}
            {
              isDisabled || <span
                className={classNames(classes.labelAlt)}
                id={ids.labelAlt}
                title={content}
                style={{color: customize.backgroundColor}}
              />
            }
          </div>
        ]
        : loadingOrContent
      }
    </button>

  return markup
}

Tertiary.displayName = 'Button.Tertiary'

Tertiary.defaultProps = {
  brandVolume: 'low',
  loading: false,
  success: false,
  disabled: false
}

Tertiary.propTypes = {
  brandVolume: PropTypes.oneOf(brandVolumeLevels),
  children: childrenPropType,
  className: PropTypes.string,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
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
  (component) => (withPropsFromContext(component, ['brandVolume'])),
  themeable((customizations, { customize }) => ({
    customize: {
      backgroundColor: customizations.color_button,
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(Tertiary)
