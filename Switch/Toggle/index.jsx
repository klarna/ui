import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import getActiveElement from '../../lib/getActiveElement'
import childrenPropType from '../../propTypes/children'

import compose from 'ramda/src/compose'
import {
  overridable,
  themeable,
  uncontrolled,
  uniqueName
} from '@klarna/higher-order-components'

const baseClass = 'switch'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletToggle: `${baseClass}__bullet__toggle`,
  label: `${baseClass}__label`,
  input: `${baseClass}__input`,
  container: `${baseClass}__container`
}

const pressMouse = (component) => () => component.setState({ pressed: true })
const releaseMouse = (component) => () => component.setState({ pressed: false })
const pressTouch = (component) => (e) => {
  component.setState({
    pressed: true,
    touchStartPositionX: e.changedTouches[0].pageX
  })
}
const releaseTouch = (component) => (e) => {
  const { touchStartPositionX } = component.state
  const touchPositionX = e.changedTouches[0].pageX
  const { value } = component.props

  if (touchStartPositionX < touchPositionX && !value) {
    component.props.onChange && component.props.onChange(true)
  } else if (touchStartPositionX > touchPositionX && value) {
    component.props.onChange && component.props.onChange(false)
  }

  if (!component.props.focus) {
    component.props.onFocus && component.props.onFocus()
  }

  component.setState({
    pressed: false,
    touchPositionX: undefined,
    touchStartPositionX: undefined,
    pseudoValue: undefined,
    bulletPosition: undefined
  })
}
const dragTouch = (component) => (e) => {
  const { position, pseudoValue } = getRelativeOffset(component, e.changedTouches[0].pageX)
  component.setState({
    bulletPosition: position,
    pseudoValue,
    touchPositionX: e.changedTouches[0].pageX
  })
}

const bulletStyles = (component, customize, xOffset) => {
  if (!customize && xOffset === undefined) {
    return undefined
  }

  const { bulletPosition } = component.state

  return {
    ...(customize ? { backgroundColor: customize.bulletColor } : {}),
    ...(xOffset !== undefined ? {
      transform: `translateX(${bulletPosition}px)`,
      WebkitTransform: `translateX(${bulletPosition}px)`,
      msTransform: `translateX(${bulletPosition}px)`
    } : {})
  }
}

const getRelativeOffset = (component, touchPositionX) => {
  const bulletWidth = component.refs.bulletToggle.getBoundingClientRect().width
  const switchPosition = component.refs.bullet.getBoundingClientRect()
  const relativePosition = touchPositionX - switchPosition.left
  const borderOffset = 1

  if (relativePosition < 0) {
    return {
      position: 0,
      pseudoValue: false
    }
  } else if ((relativePosition + bulletWidth + borderOffset) > switchPosition.width) {
    return {
      position: switchPosition.width - bulletWidth - borderOffset * 2,
      pseudoValue: true
    }
  }

  return {
    position: relativePosition - bulletWidth / 2,
    pseudoValue: undefined
  }
}

export const alignments = ['left', 'right']

const Toggle = React.createClass({
  displayName: 'Switch.Toggle',

  getDefaultProps () {
    return {
      error: false,
      disabled: false,
      align: 'left',
      legal: false,
      value: false
    }
  },

  propTypes: {
    children: childrenPropType,
    className: PropTypes.string,
    customize: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    focus: PropTypes.bool,
    id: PropTypes.string,
    legal: PropTypes.bool,
    name: PropTypes.string.isRequired,
    align: PropTypes.oneOf(alignments),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    styles: PropTypes.object,
    value: PropTypes.bool
  },

  componentDidMount () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  componentDidUpdate () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  getInitialState () {
    return {
      pressed: false
    }
  },

  render () {
    const {
      className,
      align,
      children,
      customize,
      disabled,
      error,
      focus,
      legal,
      name,
      onBlur,
      onChange,
      onFocus,
      styles,
      value,
      ...remainingProps
    } = this.props

    const { pressed, pseudoValue } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const cls = classNames(baseClass, {
      'is-checked': pseudoValue !== undefined ? pseudoValue : value,
      'is-focused': focus,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'is-error': error,
      'right': align === 'right',
      legal
    }, className)

    const onMouseDown = !disabled && pressMouse(this)
    const onMouseUp = !disabled && releaseMouse(this)
    const onTouchStart = !disabled && pressTouch(this)
    const onTouchEnd = !disabled && releaseTouch(this)
    const onTouchMove = !disabled && dragTouch(this)

    const ids = {
      bullet: `${name}__bullet`,
      bulletToggle: `${name}__bullet__toggle`,
      container: `${name}__container`,
      label: `${name}__label`,
      wrapper: `${name}__wrapper`
    }

    return (<div
      className={cls}
      id={ids.wrapper}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...remainingProps}>
      <input
        className={classNames(classes.input)}
        id={name}
        name={name}
        type='checkbox'
        checked={value}
        onBlur={onBlur}
        onChange={() => !disabled && onChange && onChange(!value)}
        onFocus={onFocus}
        ref='input'
      />
      <label
        className={classNames(classes.label)}
        id={ids.label}
        htmlFor={name}
        style={customize ? {
          color: customize.textColor
        } : undefined}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}>
        <div
          className={classNames(classes.container)}
          id={ids.container}>
          <div
            className={classNames(classes.bullet)}
            id={ids.bullet}
            ref='bullet'
            style={customize && value ? {
              backgroundColor: customize.backgroundColor,
              borderColor: customize.backgroundColor
            } : undefined}>
            <div
              className={classNames(classes.bulletToggle)}
              id={ids.bulletToggle}
              ref='bulletToggle'
              style={bulletStyles(this, customize, this.state.touchPositionX)}
            />
          </div>
        </div>
        {children}
      </label>
    </div>)
  }
})

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => field => field
    }
  }),
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      textColor: customizations.color_text
    }
  })),
  overridable(defaultStyles),
  uniqueName
)(Toggle)
