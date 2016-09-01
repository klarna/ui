import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'radio'

export default React.createClass({
  displayName: 'Radio',

  propTypes: {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    focus: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    options: PropTypes.array.isRequired,
    styles: PropTypes.object,
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
      borderless,
      className,
      focus,
      options,
      disabled,
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
        className={classNames(baseClass, {
          borderless,
          'is-disabled': disabled,
          'is-focused': focus != null
        }, className)}
        {...remainingProps}>
        {
          options.map(({key, label, description}) => [
            <input
              className={classNames(`${baseClass}__option__input`)}
              id={`${name}-${key}`}
              name={name}
              type='radio'
              onBlur={onBlur}
              checked={key === value}
              onChange={() => onChange(key)}
              onFocus={(e) => onFocus && onFocus(key, e)}
              ref={key}
              value={key}
            />,
            <label
              htmlFor={`${name}-${key}`}
              className={classNames(`${baseClass}__option`, { 'is-focused': focus === key })}>
              <div className={classNames(`${baseClass}__option__bullet`)} />
              <div className={classNames(`${baseClass}__option__checkmark`)} />

              <div
                className={classNames(`${baseClass}__option__heading`)}>
                {label}
              </div>

              {description && <div
                className={classNames(`${baseClass}__option__description`)}>
                {description}
              </div>}
            </label>
          ])
        }
      </div>
    )
  }
})
