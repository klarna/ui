import React from 'react'
import classNamesBind from 'classnames/bind'
import PropTypes from 'prop-types'
import defaultStyles from './styles.scss'
import getActiveElement from '../lib/getActiveElement'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import * as stacking from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'
import MouseflowExclude from '../MouseflowExclude'
import FieldTooltip from '../FieldTooltip'
import compose from 'ramda/src/compose'
import {
  withOverrideFromContext,
  withTheme,
  withUncontrolledProp,
  withUniqueFormIdentifier
} from '@klarna/higher-order-components'

const baseClass = 'dropdown'

const classes = {
  currentOption: `${baseClass}__current-option`,
  label: `${baseClass}__label`,
  select: `${baseClass}__select`
}

const Dropdown = React.createClass({
  displayName: 'Dropdown',

  getInitialState () {
    return {
      hover: false
    }
  },

  getDefaultProps () {
    return {
      fieldTooltip: '',
      loading: false,
      onChange: function () {},
      mouseflowExclude: false,
      prefilled: false,
      ...inlinedIcon.defaultProps,
      ...fieldStates.defaultProps,
      ...stacking.position.defaultProps,
      ...handleKeyDown.defaultProps,
      ...stacking.size.defaultProps
    }
  },

  propTypes: {
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired,
      selectedColor: PropTypes.string.isRequired
    }),
    focus: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    loading: PropTypes.bool,
    mouseflowExclude: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.any.isRequired
    })),
    prefilled: PropTypes.bool,
    styles: PropTypes.object,
    value: PropTypes.any,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...stacking.position.propTypes,
    ...stacking.size.propTypes
  },

  componentDidMount () {
    if (this.props.focus && getActiveElement(document) !== this.refs.select) {
      this.refs.select.focus()
    }
  },

  componentDidUpdate () {
    if (this.props.focus && getActiveElement(document) !== this.refs.select) {
      this.refs.select.focus()
    }
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
      arrow,
      bottom, // eslint-disable-line no-unused-vars
      center, // eslint-disable-line no-unused-vars
      className,
      customize,
      disabled,
      error, // eslint-disable-line no-unused-vars
      fieldTooltip,
      focus, // eslint-disable-line no-unused-vars
      id,
      label,
      left, // eslint-disable-line no-unused-vars
      loading,
      mouseflowExclude,
      onBlur,
      onChange,
      onClick,
      onEnter, // eslint-disable-line no-unused-vars
      onFocus,
      onTab, // eslint-disable-line no-unused-vars
      options,
      prefilled,
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
        'is-autofill': prefilled,
        'is-loading': loading,
        'is-selected': value != null,
        square,
        'empty-label': label == null || label === '',
        'is-focused': this.props.focus
      },
      fieldStates.getClassName(this.props),
      stacking.position.getClassName(this.props),
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

    const ids = id
      ? {
        label: `${id}__label`,
        option: (i) => `${id}__option__${i}`,
        select: `${id}__select`,
        selected: `${id}__selected`,
        tooltip: `${id}__field-tooltip`
      } : {
        option: () => {}
      }

    const selectElement = <select
      className={classNames(classes.select)}
      disabled={disabled || loading}
      id={ids.select}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={handleKeyDown(this.props)}
      ref='select'
      value={value || ''}
      {...props}>
      {options && options.map((attributes) => (
        <option
          key={attributes.key}
          id={ids.option(attributes.key)}
          value={attributes.key}
          {...attributes}>
          {attributes.label}
        </option>
      ))}
    </select>

    const selectedOptionElement = (selectedOption) => <div
      className={classNames(classes.currentOption)}
      id={ids.selected}
      style={selectedDynamicStyles}>
      {selectedOption.label}
    </div>

    return (
      <div
        className={cls}
        id={id}
        onClick={onClick}
        onMouseEnter={onMouseEnter(this)}
        onMouseLeave={onMouseLeave(this)}
        style={dynamicStyles}>
        <label
          className={classNames(classes.label)}
          id={ids.label}
          style={labelDynamicStyles}>
          {label}
        </label>

        {selectedOption && (
          mouseflowExclude
            ? <MouseflowExclude>{selectedOptionElement(selectedOption)}</MouseflowExclude>
            : selectedOptionElement(selectedOption)
        )}

        {mouseflowExclude
          ? <MouseflowExclude>{selectElement}</MouseflowExclude>
          : selectElement
        }

        {fieldTooltip &&
          <FieldTooltip
            arrow={arrow}
            fieldTooltip={fieldTooltip}
            id={ids.tooltip} />
        }
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

export default compose(
  withUncontrolledProp({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  withUncontrolledProp({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => e => e.target.value
    }
  }),
  withTheme((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      labelColor: customizations.color_text_secondary,
      selectedColor: customizations.color_text,
      ...customize
    }
  })),
  withOverrideFromContext,
  withUniqueFormIdentifier
)(Dropdown)
