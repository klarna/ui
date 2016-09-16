import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import * as stacking from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

const baseClass = 'dropdown'

const classes = {
  currentOption: `${baseClass}__current-option`,
  label: `${baseClass}__label`,
  select: `${baseClass}__select`
}

export default React.createClass({
  displayName: 'Dropdown',

  getInitialState () {
    return {
      hover: false
    }
  },

  getDefaultProps () {
    return {
      loading: false,
      onChange: function () {},
      ...inlinedIcon.defaultProps,
      ...fieldStates.defaultProps,
      ...stacking.position.defaultProps,
      ...handleKeyDown.defaultProps,
      ...stacking.size.defaultProps
    }
  },

  propTypes: {
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.any.isRequired
    })),
    styles: PropTypes.object,
    value: PropTypes.any,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...stacking.position.propTypes,
    ...programmaticFocus.propTypes,
    ...stacking.size.propTypes
  },

  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.select)
  },

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.select)
  },

  onMouseEnter () {
    this.setState({
      ...this.state,
      hover: true
    })
  },

  onMouseLeave () {
    this.setState({
      ...this.state,
      hover: false
    })
  },

  render () {
    const {
      bottom, // eslint-disable-line no-unused-vars
      center, // eslint-disable-line no-unused-vars
      className,
      customize,
      disabled,
      error, // eslint-disable-line no-unused-vars
      focus, // eslint-disable-line no-unused-vars
      label,
      left, // eslint-disable-line no-unused-vars
      loading,
      onBlur,
      onChange,
      onClick,
      onEnter, // eslint-disable-line no-unused-vars
      onFocus,
      onTab, // eslint-disable-line no-unused-vars
      options,
      right, // eslint-disable-line no-unused-vars
      square,
      styles,
      size, // eslint-disable-line no-unused-vars
      top, // eslint-disable-line no-unused-vars
      warning, // eslint-disable-line no-unused-vars
      value,
      ...props
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const selectedOption = options &&
      options.find((option) => String(option.key) === String(value))

    const cls = classNames(
      baseClass,
      {
        'is-loading': loading,
        'is-selected': value != null,
        square
      },
      fieldStates.getClassName(this.props),
      stacking.position.getClassName(this.props),
      programmaticFocus.getClassName(this.props),
      stacking.size.getClassName(this.props),
      className
    )

    const hasNonDefaultState = disabled || warning || error
    const useDynamicStyles = customize && !hasNonDefaultState

    const dynamicStyles = useDynamicStyles
      ? {
        borderColor: this.state.hover || focus
          ? customize.borderColorSelected
          : customize.borderColor,
        boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`,
        ...stacking.position.getBorderRadii(
          this.props,
          customize.borderRadius
        )
      }
      : undefined

    const selectedDynamicStyles = useDynamicStyles
      ? { color: customize.selectedColor }
      : undefined

    const labelDynamicStyles = useDynamicStyles
      ? { color: customize.labelColor }
      : undefined

    return (
      <div
        className={cls}
        onClick={onClick}
        onMouseEnter={onMouseEnter(this)}
        onMouseLeave={onMouseLeave(this)}
        style={dynamicStyles}>
        <label
          className={classNames(classes.label)}
          style={labelDynamicStyles}>
          {label}
        </label>

        {selectedOption &&
          <div
            className={classNames(classes.currentOption)}
            style={selectedDynamicStyles}>
            {selectedOption.label}
          </div>
        }

        <select
          className={classNames(classes.select)}
          disabled={disabled || loading}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={handleKeyDown(this.props)}
          ref='select'
          value={value || ''}
          {...props}>
          {options && options.map((attributes) => (
            <option key={attributes.key} value={attributes.key} {...attributes}>
              {attributes.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
})

const onMouseEnter = (component) => () =>
  component.setState({
    ...component.state,
    hover: true
  })

const onMouseLeave = (component) => () =>
  component.setState({
    ...component.state,
    hover: false
  })
