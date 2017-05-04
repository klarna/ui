import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import getActiveElement from '../lib/getActiveElement'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import * as stacking from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'
import MouseflowExclude from '../MouseflowExclude'
import FieldLink from '../FieldLink'

import compose from 'ramda/src/compose'
import {
  overridable,
  themeable,
  uncontrolled,
  uniqueName
} from '@klarna/higher-order-components'

const baseClass = 'field'

const classes = {
  icon: `${baseClass}--icon`,
  iconIcon: `${baseClass}--icon__icon`,
  iconIconFill: `${baseClass}--icon__icon__fill`,
  iconIconStroke: `${baseClass}--icon__icon__stroke`,
  iconInput: `${baseClass}--icon__input`,
  iconLabel: `${baseClass}--icon__label`,
  input: `${baseClass}__input`,
  label: `${baseClass}__label`
}

export const icons = inlinedIcon.INLINED_ICONS

const Field = React.createClass({
  displayName: 'Field',

  getDefaultProps () {
    return {
      big: false,
      centered: false,
      loading: false,
      nonFloatingLabel: false,
      onChange: function () {},
      onFieldLinkClick: function () {},
      responsive: true,
      fieldLink: '',
      pinCode: false,
      mouseflowExclude: false,
      ...inlinedIcon.defaultProps,
      ...fieldStates.defaultProps,
      ...stacking.position.defaultProps,
      ...handleKeyDown.defaultProps,
      ...stacking.size.defaultProps
    }
  },

  propTypes: {
    big: PropTypes.bool,
    centered: PropTypes.bool,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired,
      inputColor: PropTypes.string.isRequired
    }),
    fieldLink: PropTypes.string,
    focus: PropTypes.bool,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    input: PropTypes.func,
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onFieldLinkClick: PropTypes.func,
    nonFloatingLabel: PropTypes.bool,
    pattern: PropTypes.string,
    pinCode: PropTypes.bool,
    mouseflowExclude: PropTypes.bool,
    responsive: PropTypes.bool,
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...stacking.position.propTypes,
    ...stacking.size.propTypes
  },

  getInitialState () {
    return {
      hover: false
    }
  },

  onAutoFillStart () {
    this.setState({
      autoFill: true
    })
  },

  onAutoFillCancel () {
    this.setState({
      autoFill: false
    })
  },

  componentDidMount () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }

    this.refs.input.addEventListener &&
    this.refs.input.addEventListener('animationstart', (e) => {
      switch (e.animationName) {
        case defaultStyles.onAutoFillStart:
          return this.onAutoFillStart()

        case defaultStyles.onAutoFillCancel:
          return this.onAutoFillCancel()
      }
    })
  },

  componentDidUpdate () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  onMouseEnter () {
    this.setState({
      hover: true
    })
  },

  onMouseLeave () {
    this.setState({
      hover: false
    })
  },

  render () {
    const {
      big,
      bottom, // eslint-disable-line no-unused-vars
      center, // eslint-disable-line no-unused-vars
      className,
      centered,
      customize,
      disabled,
      error,
      icon,
      id,
      Input,
      fieldLink,
      focus,
      hidden,
      label,
      left, // eslint-disable-line no-unused-vars
      loading,
      mouseflowExclude,
      nonFloatingLabel,
      onBlur,
      onChange,
      onClick,
      onEnter, // eslint-disable-line no-unused-vars
      onFocus,
      onTab, // eslint-disable-line no-unused-vars
      onFieldLinkClick,
      pinCode,
      responsive,
      right, // eslint-disable-line no-unused-vars
      square,
      value,
      size, // eslint-disable-line no-unused-vars
      style,
      styles,
      top, // eslint-disable-line no-unused-vars
      warning,
      ...props
    } = this.props
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    const cls = classNames(
      (icon ? classes.icon : baseClass), {
        big: big || pinCode,
        'is-autofill': !!this.state.autoFill,
        'is-centered': centered || pinCode,
        'is-filled': value != null && value !== '',
        'is-loading': loading,
        'is-hidden': hidden,
        'non-responsive': !responsive,
        'non-floating-label': pinCode || nonFloatingLabel,
        'pin-code': pinCode,
        square,
        'is-focused': this.props.focus
      },
      fieldStates.getClassName(this.props),
      stacking.size.getClassName(this.props),
      stacking.position.getClassName(this.props),
      className
    )

    const hasNonDefaultState = disabled || warning || error
    const useDynamicStyles = customize && !hasNonDefaultState

    const dynamicStyles = customize
      ? {
        ...(hasNonDefaultState ? {} : {
          borderColor: this.state.hover || focus
            ? customize.borderColorSelected
            : customize.borderColor,
          boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
        }),
        ...stacking.position.getBorderRadii(
          this.props,
          customize.borderRadius
        )
      }
      : undefined

    const labelDynamicStyles = useDynamicStyles
      ? { color: customize.labelColor }
      : undefined

    const inputDynamicStyles = useDynamicStyles
      ? { color: customize.inputColor }
      : {}

    const ids = id
      ? {
        input: `${id}__input`,
        label: `${id}__label`,
        link: `${id}__field-link`
      } : {}

    const inputProps = {
      className: classNames(icon ? classes.iconInput : classes.input),
      disabled: disabled,
      id: ids.input,
      value: value || '',
      onBlur: onBlur,
      onChange: onChange,
      onKeyDown: handleKeyDown(this.props),
      onFocus: onFocus,
      ref: 'input',
      style: {
        ...inputDynamicStyles,
        ...style
      },
      ...props
    }

    const inputElement = Input
      ? <Input {...inputProps} />
      : <input {...inputProps} />

    return (
      <div
        className={cls}
        id={id}
        onClick={onClick}
        style={dynamicStyles}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames(classes.iconIcon),
            fill: classNames(classes.iconIconFill),
            stroke: classNames(classes.iconIconStroke)
          })
        }

        <label
          className={classNames(icon ? classes.iconLabel : classes.label)}
          id={ids.label}
          style={labelDynamicStyles}>
          {label}
        </label>

        {mouseflowExclude
          ? <MouseflowExclude>{inputElement}</MouseflowExclude>
          : inputElement
        }

        {fieldLink && <FieldLink
          id={ids.link}
          label={fieldLink}
          onFieldLinkClick={onFieldLinkClick} />
        }
      </div>
    )
  }
})

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => e => e.target.value
    }
  }),
  themeable((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      labelColor: customizations.color_text_secondary,
      inputColor: customizations.color_text,
      ...customize
    }
  })),
  overridable(defaultStyles),
  uniqueName
)(Field)
