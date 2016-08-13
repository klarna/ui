import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import Loader from '../../Loader'
import contains from '../../lib/contains'
import defaultStyles from '../styles.scss'
import parseColor from 'parse-color'
import Price from '../Price'

export default function Primary (props) {
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

  const content = success && '✔' || !loading && children

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(`button--primary`, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children)
  }, className)

  const labelClass = {
    label: classNames('button__label'),
    alt: classNames('button__label--alt')
  }

  const isDisabled = (loading || success || disabled)

  const loaderColor = (customize || {}).textColor && (customize || {}).backgroundColor
    ? parseColor(customize.textColor).rgb
    : 'white'

  return customize
    ? renderDynamicallyStyled(content, cls, labelClass, isDisabled, loading, loaderColor, customize, {...remainingProps})
    : render(content, cls, isDisabled, loading, loaderColor, {...remainingProps})
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

const render = (content, classNames, disabled, loading, loaderColor, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps}>
    {loading ? <Loader inline color={loaderColor}/> : content}
  </button>
)

const renderDynamicallyStyled = (content, classNames, labelClassNames, disabled, loading, loaderColor, {textColor, backgroundColor}, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps} style={{
    color: textColor,
    backgroundColor: backgroundColor,
    borderColor: backgroundColor
  }}>
    <span className={labelClassNames.label}>
      {loading ? <Loader inline color={loaderColor}/> : content}
    </span>
  </button>
)
