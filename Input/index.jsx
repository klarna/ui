import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import getActiveElement from '../lib/getActiveElement'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import * as stacking from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'
import MouseflowExclude from '../MouseflowExclude'

import compose from 'ramda/src/compose'
import {withUncontrolledProp, withUniqueFormIdentifier} from '@klarna/higher-order-components'

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

export const icons = inlinedIcon.INLINED_ICONS

const Input = React.createClass({
  displayName: 'Input',

  getDefaultProps () {
    return {
      big: false,
      centered: false,
      giant: false,
      loading: false,
      mouseflowExclude: false,
      onChange: function () {},
      prefilled: false,
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
    focus: PropTypes.bool,
    giant: PropTypes.bool,
    id: PropTypes.string,
    input: PropTypes.func,
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    mouseflowExclude: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    prefilled: PropTypes.bool,
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
      autoFill: false
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

  render () {
    const {
      big,
      bottom, // eslint-disable-line no-unused-vars
      className,
      center, // eslint-disable-line no-unused-vars
      centered,
      disabled,
      error, // eslint-disable-line no-unused-vars
      focus, // eslint-disable-line no-unused-vars
      giant,
      icon,
      id,
      Input,
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
      prefilled,
      right, // eslint-disable-line no-unused-vars
      square,
      styles,
      top, // eslint-disable-line no-unused-vars
      value,
      warning, // eslint-disable-line no-unused-vars
      ...props
    } = this.props
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    const cls = classNames(
      (icon ? classes.icon : baseClass), {
        big,
        giant,
        'is-autofill': !!this.state.autoFill || prefilled,
        'is-centered': centered,
        'is-filled': value != null && value !== '',
        'is-loading': loading,
        square,
        'is-focused': this.props.focus
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
      value: value || '',
      onBlur: onBlur,
      onChange: onChange,
      onKeyDown: handleKeyDown(this.props),
      onFocus: onFocus,
      ref: 'input',
      ...props
    }

    const inputElement = Input
      ? <Input {...inputProps} />
      : <input {...inputProps} />

    return (
      <div
        className={cls}
        id={id}
        onClick={onClick}>
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames(classes.iconIcon),
            fill: classNames(classes.iconIconFill),
            stroke: classNames(classes.iconIconStroke)
          })
        }

        <label
          className={classNames(icon ? classes.iconLabel : classes.label)}
          id={ids.label}>
          {label}
        </label>

        {mouseflowExclude
          ? <MouseflowExclude>{inputElement}</MouseflowExclude>
          : inputElement
        }

      </div>
    )
  }
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
  withUniqueFormIdentifier
)(Input)
