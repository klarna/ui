import React, { PropTypes } from 'react'
import Loader from '../../Loader'
import Price from '../Price'
import classNamesBind from 'classnames/bind'
import parseColor from 'parse-color'
import contains from '../../lib/contains'
import defaultStyles from '../styles.scss'

const baseClass = 'button'

const classes = {
  secondary: `${baseClass}--secondary`,
  label: `${baseClass}__label`,
  labelAlt: `${baseClass}__label--alt`
}

export default function Secondary (props) {
  const {
    children,
    className,
    customize,
    disabled,
    loading,
    size,
    styles,
    success,
    ...remainingProps } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.secondary, size, {
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

  return (
    <button
      className={cls}
      disabled={isDisabled}
      style={customize && {
        color: customize.backgroundColor,
        backgroundColor: loading ? undefined : customize.backgroundColor,
        borderColor: customize.backgroundColor
      }}
      {...remainingProps}>
      {
        customize ? (
          <div className={classNames(classes.label)}>
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
        )
        : loadingOrContent
      }
    </button>
  )
}

Secondary.displayName = 'Button.Secondary'

Secondary.defaultProps = {
  loading: false,
  success: false,
  disabled: false
}

Secondary.sizes = ['small', 'big']

Secondary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }),
  size: PropTypes.oneOf(Secondary.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}
