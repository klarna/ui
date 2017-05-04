import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import {themeable, overridable} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'
import defaultStyles from './styles.scss'
import * as fieldStates from '../../lib/features/fieldStates'
import * as inlinedIcon from '../../lib/features/inlinedIcon'
import * as stacking from '../../lib/features/stacking'
import MouseflowExclude from '../../MouseflowExclude'
import { Select } from '../../IconButton'

const baseClass = 'selector-input'

const classes = {
  icon: `${baseClass}--icon`,
  iconIcon: `${baseClass}--icon__icon`,
  iconIconFill: `${baseClass}--icon__icon__fill`,
  iconIconStroke: `${baseClass}--icon__icon__stroke`,
  iconInput: `${baseClass}--icon__input`,
  iconLabel: `${baseClass}--icon__label`,
  input: `${baseClass}__input`,
  inputPlaceholder: `${baseClass}__input-placeholder`,
  label: `${baseClass}__label`,
  linkWrapper: `${baseClass}__link-wrapper`
}

export const icons = inlinedIcon.INLINED_ICONS

const SelectorInput = React.createClass({
  displayName: 'SelectorInput',

  getDefaultProps () {
    return {
      big: false,
      centered: false,
      giant: false,
      loading: false,
      mouseflowExclude: false,
      ...inlinedIcon.defaultProps,
      ...fieldStates.defaultProps,
      ...stacking.position.defaultProps,
      ...stacking.size.defaultProps
    }
  },

  getInitialState () {
    return { hover: false }
  },

  propTypes: {
    big: PropTypes.bool,
    centered: PropTypes.bool,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired,
      inputColor: PropTypes.string.isRequired
    }),
    giant: PropTypes.bool,
    id: PropTypes.string,
    input: PropTypes.func,
    link: PropTypes.string,
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    mouseflowExclude: PropTypes.bool,
    onClick: PropTypes.func,
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...stacking.position.propTypes,
    ...stacking.size.propTypes
  },

  onMouseEnter () {
    this.setState({ hover: true })
  },

  onMouseLeave () {
    this.setState({ hover: false })
  },

  render () {
    const {
      big,
      bottom, // eslint-disable-line no-unused-vars
      className,
      center, // eslint-disable-line no-unused-vars
      centered,
      customize,
      disabled,
      error,
      giant,
      icon,
      id,
      label,
      left, // eslint-disable-line no-unused-vars
      link,
      loading,
      mouseflowExclude,
      onClick,
      placeholder,
      right, // eslint-disable-line no-unused-vars
      square,
      style,
      styles,
      top, // eslint-disable-line no-unused-vars
      value,
      warning,
      ...props
    } = this.props
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    const hasNonDefaultState = disabled || warning || error
    const useDynamicStyles = customize && !hasNonDefaultState

    const dynamicStyles = useDynamicStyles
      ? {
        borderColor: this.state.hover
          ? customize.borderColorSelected
          : customize.borderColor
      }
      : undefined

    const labelDynamicStyles = useDynamicStyles
      ? { color: customize.labelColor }
      : undefined

    const inputDynamicStyles = useDynamicStyles
      ? { color: customize.inputColor }
      : undefined

    const cls = classNames(
      (icon ? classes.icon : baseClass), {
        big,
        giant,
        'is-centered': centered,
        'is-filled': value != null && value !== '',
        'is-loading': loading,
        square
      },
      fieldStates.getClassName(this.props),
      stacking.size.getClassName(this.props),
      stacking.position.getClassName(this.props),
      className
    )

    const ids = id
      ? {
        input: `${id}__input`,
        label: `${id}__label`
      } : {}

    const inputProps = {
      className: classNames(icon ? classes.iconInput : classes.input),
      disabled: disabled,
      id: ids.input,
      ref: 'input',
      style: {
        ...inputDynamicStyles,
        ...style
      },
      ...props
    }

    const inputElement = (
      <div {...inputProps}>
        {
          (error || warning) && placeholder && !value
          ? <span className={classNames(classes.inputPlaceholder)}>{placeholder}</span>
          : value
        }
      </div>
    )

    return (
      <div
        className={cls}
        id={id}
        onClick={(e) => !disabled && onClick && onClick(e)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={dynamicStyles}>

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

        {!disabled && (
          <div className={classNames(classes.linkWrapper)}>
            <Select label={link} />
          </div>
        )}
      </div>
    )
  }
})

export default compose(
  themeable((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      labelColor: customizations.color_text_secondary,
      inputColor: customizations.color_text,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(SelectorInput)
