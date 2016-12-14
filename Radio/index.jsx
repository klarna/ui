import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import Collapsible from '../Collapsible'
import compose from '../lib/compose'
import uncontrolled from '../decorators/uncontrolled'
import themeable from '../decorators/themeable'
import defaultStyles from './styles.scss'

const baseClass = 'radio'

const classes = {
  option: `${baseClass}__option`,
  optionAside: `${baseClass}__option__aside`,
  optionBullet: `${baseClass}__option__bullet`,
  optionCheckmark: `${baseClass}__option__checkmark`,
  optionDescription: `${baseClass}__option__description`,
  optionLabel: `${baseClass}__option__label`,
  optionInput: `${baseClass}__option__input`,
  optionLeft: `${baseClass}__option__left`,
  optionRight: `${baseClass}__option__right`,
  optionHeader: `${baseClass}__option__header`,
  optionHeaderInner: `${baseClass}__option__inner`,
  optionWrapper: `${baseClass}__option__wrapper`,
  optionContent: `${baseClass}__option__content`
}

const Radio = React.createClass({
  displayName: 'Radio',

  propTypes: {
    borderless: PropTypes.bool,
    className: PropTypes.string,
    customize: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired,
      textPrimaryColor: PropTypes.string.isRequired,
      textSecondaryColor: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    focus: PropTypes.string,
    id: PropTypes.string,
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
      borderless,
      className,
      customize,
      focus,
      options,
      disabled: allDisabled,
      name,
      onBlur,
      onChange,
      onFocus,
      styles,
      value,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const singleOption = options.length === 1
    const baseStyle = customize ? { borderRadius: customize.borderRadius } : undefined
    const labelStyle = customize ? { color: customize.textPrimaryColor } : undefined
    const descriptionStyle = customize ? { color: customize.textSecondaryColor } : undefined
    const bulletStyle = customize
      ? {
        backgroundColor: customize.backgroundColor,
        borderColor: customize.backgroundColor
      }
      : undefined
    const checkmarkStyle = customize ? { backgroundColor: customize.bulletColor } : undefined

    return (
      <div
        className={classNames(baseClass, {
          borderless,
          'is-focused': focus != null
        }, className)}
        id={name}
        style={baseStyle}
        {...remainingProps}>
        {options.map((option) => {
          const {
            key,
            label,
            description,
            disabled,
            aside,
            content,
            leftPad,
            ...restOfProps
          } = option

          const isDisabled = allDisabled || disabled
          const id = `${name}-${key}`
          const ids = {
            aside: `${id}__aside`,
            bullet: `${id}__bullet`,
            checkmark: `${id}__checkmark`,
            content: `${id}__content`,
            description: `${id}__description`,
            header: `${id}__header`,
            headerInner: `${id}__header--inner`,
            label: `${id}__label`,
            labelInner: `${id}__label--inner`,
            left: `${id}__left`,
            right: `${id}__right`,
            wrapper: `${id}__wrapper`
          }

          return [
            <input
              className={classNames(classes.optionInput)}
              id={id}
              name={name}
              type='radio'
              onBlur={onBlur}
              checked={key === value}
              onChange={() => onChange && onChange(key)}
              onFocus={(e) => onFocus && onFocus(key, e)}
              ref={key}
              value={key}
              disabled={isDisabled}
            />,
            <div
              className={classNames(
                classes.option,
                {
                  'is-focused': !isDisabled && focus === key,
                  'left-pad': leftPad && !singleOption,
                  'is-disabled': isDisabled
                }
              )}
              id={ids.label}
              {...restOfProps}>
              <label
                htmlFor={`${name}-${key}`}
                className={classNames(classes.optionHeader)}
                id={ids.header}>
                <div
                  className={classNames(classes.optionHeaderInner)}
                  id={ids.headerInner}>
                  {!singleOption && <div className={classNames(classes.optionLeft)} id={ids.left}>
                    <div className={classNames(classes.optionWrapper)} id={ids.wrapper}>
                      <div
                        className={classNames(classes.optionBullet)}
                        id={ids.bullet}
                        style={key === value ? bulletStyle : undefined}
                      />
                      <div
                        className={classNames(classes.optionCheckmark)}
                        id={ids.checkmark}
                        style={key === value ? checkmarkStyle : undefined}
                      />
                    </div>
                  </div>}

                  <div
                    className={classNames(classes.optionRight)}
                    id={ids.right}>
                    <div
                      className={classNames(classes.optionLabel)}
                      id={ids.labelInner}
                      style={labelStyle}>
                      {label}
                    </div>

                    {description && <div
                      className={classNames(classes.optionDescription)}
                      id={ids.description}
                      style={descriptionStyle}>
                      {description}
                    </div>}
                  </div>

                  {aside && <div
                    className={classNames(classes.optionAside)}
                    id={ids.aside}>
                    {aside}
                  </div>}
                </div>
              </label>

              {content && <Collapsible
                collapsed={isDisabled || !singleOption && key !== value}>
                <div
                  className={classNames(classes.optionContent)}
                  id={ids.content}>
                  {content}
                </div>
              </Collapsible>}
            </div>
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
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      borderRadius: customizations.radius_border,
      textPrimaryColor: customizations.color_text,
      textSecondaryColor: customizations.color_text_secondary
    }
  }))
)(Radio)
