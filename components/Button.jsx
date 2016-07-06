import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/button.scss'

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

  const content =
    success && '✔' || !loading && children

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(`cui__button--${design}`, size, {
    'is-disabled': disabled,
    'is-loading': loading,
    'dynamic-styling': customize
  }, className)

  const labelCls = {
    label: classNames('cui__button__label'),
    alt: classNames('cui__button__label--alt')
  }

  const isDisabled = (loading || success || disabled)

  const dynamicRenderer = design === 'primary'
    ? renderDynamicallyStyledPrimaryButton
    : renderDynamicallyStyledSecondaryButton

  return customize
    ? dynamicRenderer(content, cls, labelCls, isDisabled, customize, {...remainingProps})
    : renderButton(content, cls, isDisabled, {...remainingProps})
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

const renderButton = (content, classNames, disabled, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps}>
    {content}
  </button>
)

const renderDynamicallyStyledPrimaryButton = (content, classNames, labelClassNames, disabled, {textColor, backgroundColor}, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps} style={{
    color: textColor,
    backgroundColor: backgroundColor,
    borderColor: backgroundColor
  }}>
    <span className={labelClassNames.label}>
      {content}
    </span>
  </button>
)

const renderDynamicallyStyledSecondaryButton = (content, classNames, labelClassNames, disabled, {textColor, backgroundColor}, remainingProps) => (
  <button className={classNames} disabled={disabled} {...remainingProps} style={{
    color: backgroundColor,
    backgroundColor: backgroundColor,
    borderColor: backgroundColor
  }}>
    <div className={labelClassNames.label}>
      {content}
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
