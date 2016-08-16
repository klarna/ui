import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import Loader from '../../Loader'
import contains from '../../lib/contains'
import defaultStyles from '../styles.scss'
import parseColor from 'parse-color'
import Price from '../Price'

const baseClass = 'button'

const classes = {
  primary: `${baseClass}--primary`,
  label: `${baseClass}__label`
}

export default function Primary ({
  children,
  className,
  customize,
  disabled,
  loading,
  size,
  styles,
  success,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(classes.primary, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children)
  }, className)

  const loaderColor = (customize || {}).textColor && (customize || {}).backgroundColor
    ? parseColor(customize.textColor).rgb
    : 'white'

  const loadingOrContent = loading
    ? <Loader inline color={loaderColor}/>
    : (success ? '✔' : children)

  return (
    <button
      className={cls}
      disabled={loading || success || disabled}
      style={customize && {
        color: customize.textColor,
        backgroundColor: customize.backgroundColor,
        borderColor: customize.backgroundColor
      }}
      {...remainingProps}>
      {customize ? (
        <span className={classNames(classes.label)}>
          {loadingOrContent}
        </span>
      )
      : loadingOrContent}
    </button>
  )
}

Primary.displayName = 'Button.Primary'

Primary.defaultProps = {
  loading: false,
  success: false,
  disabled: false
}

Primary.sizes = ['small', 'big']

Primary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }),
  size: PropTypes.oneOf(Primary.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}
