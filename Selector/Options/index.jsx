import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import {
  withOverrideFromContext,
  withTheme,
  withUncontrolledProp,
  withUniqueFormIdentifier
} from '@klarna/higher-order-components'

import defaultStyles from './styles.scss'
import Checkmark from '../../icons/Checkmark'
import getActiveElement from '../../lib/getActiveElement'

const baseClass = 'selector--options'

const classes = {
  icon: `${baseClass}__icon`,
  input: `${baseClass}__input`,
  item: `${baseClass}__item`,
  label: `${baseClass}__label`
}

const Options = React.createClass({
  displayName: 'Selector.Options',

  propTypes: {
    className: PropTypes.string,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired,
      labelColorSelected: PropTypes.string.isRequired
    }),
    data: PropTypes.array.isRequired,
    focus: PropTypes.any,
    id: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    styles: PropTypes.object,
    // Allows any type to be a key, as long as it is comparable
    value: PropTypes.any
  },

  getInitialState () {
    return {
      hover: undefined,
      focus: undefined
    }
  },

  componentDidMount () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  componentDidUpdate () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  render () {
    const {
      className,
      customize,
      data,
      focus,
      name,
      onBlur,
      onChange,
      onFocus,
      styles,
      value,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const useDynamicStyles = !!customize

    return (
      <div
        className={classNames(baseClass, 'title', className)}
        id={name}
        {...remainingProps}>
        {data.map(({key, label}) => {
          const isFocused = focus === key
          const isHovered = this.state.hover === key
          const isSelected = value === key
          const id = `${name}-${key}`
          const ids = {
            icon: `${id}__icon`,
            label: `${id}__label`,
            labelInner: `${id}__label--inner`
          }

          const itemDynamicStyles = useDynamicStyles
            ? { borderColor: customize.borderColor }
            : undefined

          const labelDynamicStyles = useDynamicStyles
            ? { color: isHovered ? customize.labelColorSelected : customize.labelColor }
            : undefined

          return [
            <input
              className={classNames(classes.input)}
              id={id}
              name={name}
              type='radio'
              onBlur={(e) => onBlur && onBlur(e)}
              checked={key === value}
              onChange={() => onChange && onChange(key)}
              onFocus={(e) => onFocus && onFocus(key, e)}
              ref={key}
              value={key}
            />,
            <label
              htmlFor={id}
              className={classNames(
                classes.item, {'is-focused': isFocused}
              )}
              id={ids.label}
              key={key}
              onMouseEnter={this.onOptionMouseEnter.bind(this, key)}
              onMouseLeave={this.onOptionMouseLeave.bind(this, key)}
              style={itemDynamicStyles}>
              <div
                className={classNames(classes.label)}
                id={ids.labelInner}
                style={labelDynamicStyles}>
                {label}
              </div>

              {isSelected && (
                <Checkmark
                  className={classNames(classes.icon)}
                  color='blue'
                  id={ids.icon}
                  stroke={useDynamicStyles && customize.bulletColor}
                />
              )}
            </label>
          ]
        })}
      </div>
    )
  },

  onOptionMouseEnter (key) {
    this.setState({ hover: key })
  },

  onOptionMouseLeave (key) {
    this.setState({ hover: undefined })
  }
})

export default compose(
  withUncontrolledProp({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => field => field,
      onBlur: () => () => undefined
    }
  }),
  withUncontrolledProp({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => field => field
    }
  }),
  withUniqueFormIdentifier,
  withTheme((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      bulletColor: customizations.color_checkbox_checkmark,
      labelColor: customizations.color_text_secondary,
      labelColorSelected: customizations.color_text,
      ...customize
    }
  })),
  withOverrideFromContext
)(Options)
