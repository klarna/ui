import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import getActiveElement from '../../lib/getActiveElement'
import childrenPropType from '../../propTypes/children'

import compose from 'ramda/src/compose'
import {uncontrolled, uniqueName} from '@klarna/higher-order-components'

const baseClass = 'segmented'

const classes = {
  button: `${baseClass}__button`,
  input: `${baseClass}__input`
}

export const tabDisplays = ['fluid', 'static']

const Segmented = React.createClass({
  displayName: 'Segmented',

  propTypes: {
    children: childrenPropType,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired
    })).isRequired,
    selectable: PropTypes.bool,
    tabDisplay: PropTypes.oneOf(tabDisplays),
    value: PropTypes.string,
    white: PropTypes.bool
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

  getDefaultProps () {
    return {
      selectable: true,
      tabDisplay: 'fluid'
    }
  },

  render () {
    const {
      className,
      children,
      focus,
      onBlur,
      onChange,
      onFocus,
      options,
      name,
      selectable,
      styles,
      tabDisplay,
      value,
      white,
      ...props
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    const cls = classNames(baseClass, tabDisplay, className, {
      'is-selectable': selectable,
      white
    })

    return (
      <div className={cls} {...props}>
        {children}
        {options.map(({ key, label }, index) => {
          const id = `${name}-${key}`

          const tabClass = classNames(classes.button, {
            left: index === 0,
            center: index > 0 && index < options.length - 1,
            right: index === options.length - 1,
            'is-focused': focus === key
          })

          return [
            (<input
              className={classNames(classes.input)}
              type='radio'
              ref={key}
              name={name}
              id={id}
              onBlur={onBlur}
              onChange={onChange && (() => onChange(key))}
              onFocus={(e) => onFocus && onFocus(key, e)}
              checked={key === value}
              value={key}
             />),
          (<label
            id={`${id}-tab`}
            style={tabDisplay === 'static' ? {
              width: `${(100 / options.length)}%`
            } : undefined}
            className={tabClass}
            htmlFor={id}>
            {label}
          </label>)
          ]
        })}
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
)(Segmented)
