import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import { position, size } from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

const baseClass = 'input'

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

export default React.createClass({
  displayName: 'Input',

  defaultProps: {
    big: false,
    centered: false,
    giant: false,
    loading: false,
    onChange: function () {},
    ...inlinedIcon.defaultProps,
    ...fieldStates.defaultProps,
    ...position.defaultProps,
    ...handleKeyDown.defaultProps,
    ...size.defaultProps
  },

  propTypes: {
    big: PropTypes.bool,
    centered: PropTypes.bool,
    giant: PropTypes.bool,
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...position.propTypes,
    ...programmaticFocus.propTypes,
    ...size.propTypes
  },

  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  },

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  },

  render () {
    const {
      big,
      className,
      centered,
      disabled,
      giant,
      icon,
      label,
      loading,
      onBlur,
      onChange,
      onClick,
      onFocus,
      square,
      value,
      styles,
      ...props
    } = this.props
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

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
      programmaticFocus.getClassName(this.props),
      size.getClassName(this.props),
      position.getClassName(this.props),
      className
    )

    return (
      <div
        className={cls}
        onClick={onClick}>
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames(classes.iconIcon),
            fill: classNames(classes.iconIconFill),
            stroke: classNames(classes.iconIconStroke)
          })
        }

        <label
          className={classNames(icon ? classes.iconLabel : classes.label )}>
          {label}
        </label>

        <input
          className={classNames(icon ? classes.iconInput : classes.input)}
          disabled={disabled}
          value={value || ''}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={handleKeyDown(this.props)}
          onFocus={onFocus}
          ref='input'
          {...props}
        />
      </div>
    )
  }
})
