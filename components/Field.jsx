import React, { PropTypes, Component } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/field.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import { position, size } from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

export default class Field extends Component {

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
        (icon ? 'cui__field--icon' : 'cui__field'), {
          big,
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
          ? 'cui__field--icon__label'
          : 'cui__field__label'
      ),
      input: classNames(
        icon
          ? 'cui__field--icon__input'
          : 'cui__field__input'
      )
    }

    return (
      <div
        className={classes.field}
        onClick={onClick}
      >
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames('cui__field--icon__icon'),
            fill: classNames('cui__field--icon__icon__fill'),
            stroke: classNames('cui__field--icon__icon__stroke')
          })
        }

        <label className={classes.label}>{label}</label>

        <input
          className={classes.input}
          disabled={disabled}
          value={value || ''}
          onBlur={onBlur}
          onChange={onChange || function () {}}
          onKeyDown={handleKeyDown(this.props)}
          onFocus={onFocus}
          ref='input'
          {...props}
        />
      </div>
    )
  }
}

Field.defaultProps = {
  big: false,
  centered: false,
  loading: false,
  ...inlinedIcon.defaultProps,
  ...fieldStates.defaultProps,
  ...position.defaultProps,
  ...handleKeyDown.defaultProps,
  ...size.defaultProps
}

Field.propTypes = {
  big: PropTypes.bool,
  centered: PropTypes.bool,
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
