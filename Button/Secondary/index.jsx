import React, { PropTypes } from 'react'
import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'
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
  darkening: `${baseClass}--secondary__darkening`,
  secondary: `${baseClass}--secondary`,
  label: `${baseClass}__label`,
  labelAlt: `${baseClass}__label--alt`
}

export const sizes = ['small', 'big']

function Secondary ({
  brandVolume,
  children,
  className,
  customize,
  disabled,
  id,
  loading,
  size,
  style,
  styles,
  success,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.secondary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children),
    'brand-volume-high': brandVolume === 'high'
  }, className)

  const isDisabled = (loading || success || disabled)

  const loaderColor = (customize || {}).textColor && (customize || {}).backgroundColor
    ? parseColor(customize.backgroundColor).rgb
    : 'blue'

  const content = (success ? '✔' : children)

  const loadingOrContent = loading
    ? <Loader inline color={loaderColor}/>
    : content

  const customizations = customize
    ? {
      color: customize.backgroundColor,
      backgroundColor: loading ? undefined : customize.backgroundColor,
      borderColor: customize.backgroundColor,
      borderRadius: customize.borderRadius
    } : {}

  const ids = id
    ? {
      darkening: `${id}__darkening`,
      label: `${id}__label`,
      labelAlt: `${id}__label--alt`
    } : {}

  return (
    <button
      className={cls}
      disabled={isDisabled}
      id={id}
      style={{
        ...customizations,
        ...style
      }}
      {...props}>
      {
        customize ? [
          loading || <div key={1}
            className={classNames(classes.darkening)}
            id={ids.darkening}
            style={customize && {
              borderRadius: `${parseInt(customize.borderRadius, 10) - 1}px`
            }}
          />,
          <div
            key={2}
            id={ids.label}
            className={classNames(classes.label)}>
            {loadingOrContent}
            {
              isDisabled ||
                <span
                  className={classNames(classes.labelAlt)}
                  id={ids.labelAlt}
                  title={content}
                  style={{color: customize.textColor}}>
                </span>
            }
          </div>
        ]
        : loadingOrContent
      }
    </button>
  )
}

Secondary.displayName = 'Button.Secondary'

Secondary.defaultProps = {
  brandVolume: 'low',
  loading: false,
  success: false,
  disabled: false
}

Secondary.propTypes = {
  brandVolume: PropTypes.oneOf(brandVolumeLevels),
  children: childrenPropType,
  className: PropTypes.string,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  }),
  id: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  (component) => (withPropsFromContext(component, ['brandVolume'])),
  themeable((customizations, { customize }) => ({
    customize: {
      ...customize,
      backgroundColor: customizations.color_button,
      borderRadius: customizations.radius_border,
      textColor: customizations.color_button_text
    }
  })),
  overridable(defaultStyles)
)(Secondary)
