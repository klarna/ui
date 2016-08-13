import React, { PropTypes } from 'react'
import Loader from '../../Loader'
import Price from '../Price'
import classNamesBind from 'classnames/bind'
import parseColor from 'parse-color'
import contains from '../../lib/contains'
import getLoaderColor from '../getLoaderColor'
import defaultStyles from '../styles.scss'

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

  const content = success && '✔' || !loading && children

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(`button--secondary`, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize,
    'has-price': contains(Price, children)
  }, className)

  const labelCls = {
    label: classNames('button__label'),
    alt: classNames('button__label--alt')
  }

  const isDisabled = (loading || success || disabled)

  const loaderColor = getLoaderColor(
    'secondary',
    (customize || {}).textColor,
    (customize || {}).backgroundColor
  )

  return customize
    ? renderDynamicallyStyled(content, cls, labelCls, isDisabled, loading, loaderColor, customize, {...remainingProps})
    : render(content, cls, isDisabled, loading, loaderColor, {...remainingProps})
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

const render = (content, classNames, disabled, loading, loaderColor, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps}>
    {loading ? <Loader inline color={loaderColor}/> : content}
  </button>
)

const renderDynamicallyStyled = (content, classNames, labelClassNames, disabled, loading, loaderColor, {textColor, backgroundColor}, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps} style={{
    color: backgroundColor,
    backgroundColor: loading ? undefined : backgroundColor,
    borderColor: backgroundColor
  }}>
    <div className={labelClassNames.label}>
      {loading ? <Loader inline color={loaderColor}/> : content}
      {
        disabled ||
          <span
            className={labelClassNames.alt}
            title={content}
            style={{color: textColor}}>
          </span>
      }
    </div>
  </button>
)
