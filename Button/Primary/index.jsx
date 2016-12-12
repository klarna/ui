import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import Loader from '../../Loader'
import contains from '../../lib/contains'
import compose from '../../lib/compose'
import defaultStyles from '../styles.scss'
import parseColor from 'parse-color'
import Price from '../Price'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import brandVolumeLevels from '../../lib/brandVolumeLevels'

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
  loading,
  size,
  style,
  styles,
  success,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.primary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children),
    'brand-volume-high': brandVolume === 'high'
  }, className)

  const loaderColor = (customize || {}).textColor && (customize || {}).backgroundColor
    ? parseColor(customize.textColor).rgb
    : 'white'

  const loadingOrContent = loading
    ? <Loader inline color={loaderColor}/>
    : (success ? '✔' : children)

  const customizations = customize
    ? {
      color: customize.textColor,
      backgroundColor: customize.backgroundColor,
      borderColor: customize.backgroundColor,
      borderRadius: customize.borderRadius
    } : {}

  return (
    <button
      className={cls}
      disabled={loading || success || disabled}
      style={{
        ...customizations,
        ...style
      }}
      {...remainingProps}>
      {customize ? [
        <span key={1} className={classNames(classes.label)}>
          {loadingOrContent}
        </span>,
        loading || disabled || <div key={2}
          className={classNames(classes.darkening)}
          style={{borderRadius: customize.borderRadius}}
        />
      ]
      : loadingOrContent}
    </button>
  )
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
  children: PropTypes.node,
  className: PropTypes.string,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  }),
  size: PropTypes.oneOf(sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  themeable(function (customizations, { customize }) {
    return {
      customize: {
        ...customize,
        backgroundColor: customizations.color_button,
        borderRadius: customizations.radius_border,
        textColor: customizations.color_button_text
      }
    }
  }),
  overridable(defaultStyles)
)(Primary)
