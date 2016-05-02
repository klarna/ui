import React, { PropTypes, Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/field.scss'
import combinations from '../lib/combinations'
import toObjectWithValue from '../lib/toObjectWithValue'
import fieldSizeFraction from '../propTypes/fieldSizeFraction'
import { position, size } from './features/stacking'
import { handleKeyDown } from './features/keyboardEvents'

const classNames = classNamesBind.bind(styles)

export const focusTypes = {
  FAKE: 'fake',
  REAL: 'real'
}

export const states = [
  'disabled',
  'error',
  'warning'
]

const maybeFocus = ((document) => (type, input) => {
  switch (type) {
    case focusTypes.REAL:
      if (document.activeElement !== input) {
        input.focus()
      }
      break
    case focusTypes.FAKE:
      if (typeof input.scrollIntoViewIfNeeded === 'function') {
        input.scrollIntoViewIfNeeded()
      }
      break
  }
})(document)

export default class Field extends Component {

  componentDidMount () {
    maybeFocus(this.props.focus, this.refs.input)
  }

  componentDidUpdate () {
    maybeFocus(this.props.focus, this.refs.input)
  }

  render () {
    const {
      big,
      className,
      centered,
      disabled,
      error,
      focus,
      icon: Icon,
      label,
      loading,
      onBlur,
      onChange,
      onClick,
      onFocus,
      square,
      value,
      warning,
      ...props
    } = this.props

    const classes = {
      field: classNames(
        (Icon ? 'cui__field--icon' : 'cui__field'), {
          big,
          'is-centered': centered,
          'is-disabled': disabled,
          'is-error': error,
          'is-filled': value != null && value !== '',
          'is-focused': focus,
          'is-warning': warning,
          'is-loading': loading,
          square
        },
        size.getClassName(props),
        position.getClassName(props),
        className),
      label: classNames('cui__field__label'),
      input: classNames('cui__field__input')
    }

    return (
      <div
        className={classes.field}
        onClick={onClick}
      >
        { Icon &&
          <Icon />
        }

        <label className={classes.label}>{label}</label>

        <input
          className={classes.input}
          disabled={disabled}
          value={value}
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

Field.defaultProps = {
  big: false,
  centered: false,
  loading: false,
  ...toObjectWithValue(false)(states),
  ...position.defaultProps,
  ...handleKeyDown.defaultProps,
  ...size.defaultProps
}

Field.propTypes = {
  big: PropTypes.bool,
  centered: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  ...toObjectWithValue(PropTypes.bool)(states),
  focus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Object.keys(focusTypes).map((key) => focusTypes[key]))
  ]),
  ...handleKeyDown.propTypes,
  ...position.propTypes,
  ...size.propTypes
}
