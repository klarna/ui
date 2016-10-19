import React, { PropTypes } from 'react'
import Loader from '../../Loader'
import Price from '../Price'
import classNamesBind from 'classnames/bind'
import parseColor from 'parse-color'
import contains from '../../lib/contains'
import themeable from '../../decorators/themeable'
import defaultStyles from '../styles.scss'

const baseClass = 'button'

const classes = {
  darkening: `${baseClass}--tertiary__darkening`,
  tertiary: `${baseClass}--tertiary`,
  label: `${baseClass}__label`,
  labelAlt: `${baseClass}__label--alt`
}

export const sizes = ['small', 'big']

function Tertiary (props) {
  const {
    children,
    className,
    customize,
    disabled,
    loading,
    size,
    style,
    styles,
    success,
    ...remainingProps } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.tertiary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children)
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

  return (
    <button
      className={cls}
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
              isDisabled ||
                <span
                  className={classNames(classes.labelAlt)}
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

Tertiary.displayName = 'Button.Tertiary'

Tertiary.defaultProps = {
  loading: false,
  success: false,
  disabled: false
}

Tertiary.propTypes = {
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

export default themeable(Tertiary, (customizations, { customize }) => ({
  customize: {
    ...customize,
    backgroundColor: customizations.color_button,
    borderRadius: customizations.radius_border,
    textColor: customizations.color_button_text
  }
}))
