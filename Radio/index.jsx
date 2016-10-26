import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'radio'

const classes = {
  option: `${baseClass}__option`,
  optionBullet: `${baseClass}__option__bullet`,
  optionCheckmark: `${baseClass}__option__checkmark`,
  optionDescription: `${baseClass}__option__description`,
  optionLabel: `${baseClass}__option__label`,
  optionInput: `${baseClass}__option__input`,
  optionLeft: `${baseClass}__option__left`,
  optionRight: `${baseClass}__option__right`,
  optionHeader: `${baseClass}__option__header`,
  optionHeaderInner: `${baseClass}__option__inner`,
  optionWrapper: `${baseClass}__option__wrapper`
}

export default React.createClass({
  displayName: 'Radio',

  propTypes: {
    borderful: PropTypes.bool,
    borderless: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    focus: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
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
      borderful,
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
          borderful,
          borderless,
          'is-disabled': disabled,
          'is-focused': focus != null
        }, className)}
        {...remainingProps}>
        {
          options.map(({key, label, description}) => [
            <input
              className={classNames(classes.optionInput)}
              id={`${name}-${key}`}
              name={name}
              type='radio'
              onBlur={onBlur}
              checked={key === value}
              onChange={() => onChange && onChange(key)}
              onFocus={(e) => onFocus && onFocus(key, e)}
              ref={key}
              value={key}
            />,
            <label
              htmlFor={`${name}-${key}`}
              className={classNames(classes.option, { 'is-focused': focus === key })}>

              <div className={classNames(classes.optionHeader)}>
                <div className={classNames(classes.optionHeaderInner)}>
                  <div className={classNames(classes.optionLeft)}>
                    <div className={classNames(classes.optionWrapper)}>
                      <div className={classNames(classes.optionBullet)} />
                      <div className={classNames(classes.optionCheckmark)} />
                    </div>
                  </div>

                  <div className={classNames(classes.optionRight)}>
                    <div
                      className={classNames(classes.optionLabel)}>
                      {label}
                    </div>

                    {description && <div
                      className={classNames(classes.optionDescription)}>
                      {description}
                    </div>}
                  </div>
                </div>
              </div>
            </label>
          ])
        }
      </div>
    )
  }
})
