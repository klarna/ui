import React, { PropTypes } from 'react'
import Loader from '../Loader'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import parseColor from 'parse-color'
import contains from '../lib/contains'

export function Price (props) {
  return (
    <span className={defaultStyles['button__price']}>
      {props.children}
    </span>
  )
}

export default function Button (props) {
  const {
    children,
    className,
    customize,
    design,
    disabled,
    loading,
    size,
    styles,
    success,
    ...remainingProps } = props

  const content = success && '✔' || !loading && children

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(`button--${design}`, size, {
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
    design,
    (customize || {}).textColor,
    (customize || {}).backgroundColor
  )

  const dynamicRenderer = design === 'primary'
    ? renderDynamicallyStyledPrimaryButton
    : renderDynamicallyStyledSecondaryButton

  return customize
    ? dynamicRenderer(content, cls, labelCls, isDisabled, loading, loaderColor, customize, {...remainingProps})
    : renderButton(content, cls, isDisabled, loading, loaderColor, {...remainingProps})
}

Button.defaultProps = {
  design: 'primary',
  loading: false,
  success: false,
  disabled: false
}

Button.designs = ['primary', 'secondary']
Button.sizes = ['small', 'big']

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }),
  design: PropTypes.oneOf(Button.designs),
  size: PropTypes.oneOf(Button.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}

const renderButton = (content, classNames, disabled, loading, loaderColor, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps}>
    {loading ? <Loader inline color={loaderColor}/> : content}
  </button>
)

const renderDynamicallyStyledPrimaryButton = (content, classNames, labelClassNames, disabled, loading, loaderColor, {textColor, backgroundColor}, remainingProps) => (
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

const renderDynamicallyStyledSecondaryButton = (content, classNames, labelClassNames, disabled, loading, loaderColor, {textColor, backgroundColor}, remainingProps) => (
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

const getLoaderColor = (design, textColor, backgroundColor) => {
  if (textColor && backgroundColor) {
    const { rgb } = parseColor(design === 'primary' ? textColor : backgroundColor)
    return rgb
  }

  return design === 'primary' ? 'white' : 'blue'
}

