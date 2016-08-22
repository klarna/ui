import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'installments'

const classes = {
  input: `${baseClass}__input`,
  label: `${baseClass}__label`,
  labelConnector: `${baseClass}__label__connector`,
  labelInfo: `${baseClass}__label__info`,
  labelValue: `${baseClass}__label__value`
}

export default React.createClass({
  displayName: 'Installments',

  propTypes: {
    options: PropTypes.arrayOf(PropTypes.shape({
      connector: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      value: PropTypes.node.isRequired
    })).isRequired,
    className: PropTypes.string,
    focus: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
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
      focus,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      value: selected,
      styles,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({
      ...defaultStyles,
      ...styles
    })

    return (<div
      className={classNames(baseClass, className)}
      {...remainingProps}>
      {options.map(({ key, value, info, connector }, index) => {
        const id = `${name}-${key}`

        return [
          (<input
            className={classNames(classes.input)}
            type='radio'
            name={name}
            key={`input-${id}`}
            ref={key}
            id={id}
            onBlur={onBlur}
            onChange={onChange && (() => onChange(key))}
            onFocus={(e) => onFocus(key, e)}
            checked={key === selected} />),
          (<label
            key={`label-${id}`}
            className={classNames(classes.label, 'third', { 'is-focused': focus === key })}
            htmlFor={id}>
            <span className={classNames(classes.labelValue)}>{value}</span>
            <span className={classNames(classes.labelConnector)}>{connector}</span>
            <span className={classNames(classes.labelInfo)}>{info}</span>
          </label>)
        ]
      })}
    </div>)
  }
})
