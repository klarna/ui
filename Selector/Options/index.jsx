import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import Checkmark from '../../icons/Checkmark'

import compose from 'ramda/src/compose'
import {uncontrolled, uniqueName} from '@klarna/higher-order-components'

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
    data: PropTypes.array.isRequired,
    focus: PropTypes.any,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    styles: PropTypes.object,
    // Allows any type to be a key, as long as it is comparable
    value: PropTypes.any
  },

  componentDidMount () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  componentDidUpdate () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  render () {
    const {
      className,
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

    return (
      <div
        className={classNames(baseClass, 'title', className)}
        {...remainingProps}>
        {data.map(({ key, label }) => [
          <input
            className={classNames(classes.input)}
            id={`${name}-${key}`}
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
            htmlFor={`${name}-${key}`}
            className={classNames(classes.item, { 'is-focused': focus === key })}
            key={key}>
            <div
              className={classNames(classes.label)} >
              {label}
            </div>

            {key === value && (
              <Checkmark
                className={classNames(classes.icon)}
                color='blue'
              />
            )}
          </label>
        ])}
      </div>
    )
  }
})

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlerName: 'onFocus',
    handlerSelector: (x) => x,
    resetHandlerName: 'onBlur'
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (x) => x
  }),
  uniqueName
)(Options)
