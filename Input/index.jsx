import React, { PropTypes, Component } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import { position, size } from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

export default class Input extends Component {
  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  }

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  }

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

    const classes = {
      field: classNames(
        (icon ? 'input--icon' : 'input'), {
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
        className),
      label: classNames(
        icon
          ? 'input--icon__label'
          : 'input__label'
      ),
      input: classNames(
        icon
          ? 'input--icon__input'
          : 'input__input'
      )
    }

    return (
      <div
        className={classes.field}
        onClick={onClick}
      >
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames('input--icon__icon'),
            fill: classNames('input--icon__icon__fill'),
            stroke: classNames('input--icon__icon__stroke')
          })
        }

        <label className={classes.label}>{label}</label>

        <input
          className={classes.input}
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
}

Input.defaultProps = {
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
}

Input.propTypes = {
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
}
