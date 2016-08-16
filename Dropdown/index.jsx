import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import { position, size } from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

const baseClass = 'dropdown'

const classes = {
  currentOption: `${baseClass}__current-option`,
  label: `${baseClass}__label`,
  select: `${baseClass}__select`
}

export default React.createClass({
  displayName: 'Dropdown',

  defaultProps: {
    loading: false,
    onChange: function () {},
    ...inlinedIcon.defaultProps,
    ...fieldStates.defaultProps,
    ...position.defaultProps,
    ...handleKeyDown.defaultProps,
    ...size.defaultProps
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
      value: PropTypes.any.isRequired
    })),
    styles: PropTypes.object,
    value: PropTypes.any,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...position.propTypes,
    ...programmaticFocus.propTypes,
    ...size.propTypes
  },

  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.select)
  },

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.select)
  },

  render () {
    const {
      className,
      disabled,
      label,
      loading,
      onBlur,
      onChange,
      onClick,
      onFocus,
      options,
      square,
      styles,
      value,
      ...props
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const selectedOption = options &&
      options.find((option) => String(option.value) === String(value))

    const cls = classNames(
      baseClass,
      {
        'is-loading': loading,
        'is-selected': value != null,
        square
      },
      fieldStates.getClassName(this.props),
      position.getClassName(this.props),
      programmaticFocus.getClassName(this.props),
      size.getClassName(this.props),
      className
    )

    return (
      <div
        className={cls}
        onClick={onClick}>
        <label
          className={classNames(classes.label)}>
          {label}
        </label>

        {selectedOption &&
          <div
            className={classNames(classes.currentOption)}>
            {selectedOption.label}
          </div>
        }

        <select
          className={classNames(classes.select)}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={handleKeyDown(this.props)}
          ref='select'
          value={value || ''}
          {...props}>
          {options && options.map((attributes) => (
            <option key={attributes.value} {...attributes}>
              {attributes.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
})
