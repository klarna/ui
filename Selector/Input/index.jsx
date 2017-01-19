import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../../lib/features/programmaticFocus'
import * as fieldStates from '../../lib/features/fieldStates'
import * as inlinedIcon from '../../lib/features/inlinedIcon'
import * as stacking from '../../lib/features/stacking'
import { handleKeyDown } from '../../lib/features/keyboardEvents'
import MouseflowExclude from '../../MouseflowExclude'
import { Select } from '../../IconButton'

const baseClass = 'input'

const classes = {
  icon: `${baseClass}--icon`,
  iconIcon: `${baseClass}--icon__icon`,
  iconIconFill: `${baseClass}--icon__icon__fill`,
  iconIconStroke: `${baseClass}--icon__icon__stroke`,
  iconInput: `${baseClass}--icon__input`,
  iconLabel: `${baseClass}--icon__label`,
  input: `${baseClass}__input`,
  inputPlaceholder: `${baseClass}__input-placeholder`,
  label: `${baseClass}__label`,
  linkWrapper: `${baseClass}__link-wrapper`,
}

export const icons = inlinedIcon.INLINED_ICONS

export default React.createClass({
  displayName: 'Input',

  getDefaultProps () {
    return {
      big: false,
      centered: false,
      giant: false,
      loading: false,
      mouseflowExclude: false,
      onChange: function () {},
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
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...stacking.position.propTypes,
    ...programmaticFocus.propTypes,
    ...stacking.size.propTypes
  },

  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  },

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
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
      placeholder,
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
        'is-centered': centered,
        'is-filled': value != null && value !== '',
        'is-loading': loading,
        square
      },
      fieldStates.getClassName(this.props),
      programmaticFocus.getClassName(this.props),
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
      onBlur: onBlur,
      onChange: onChange,
      onKeyDown: handleKeyDown(this.props),
      onFocus: onFocus,
      ref: 'input',
      ...props
    }

    const inputElement = (
      <div {...inputProps}>
        {
          placeholder
          ? <span className={classNames(classes.inputPlaceholder)}>{placeholder}</span>
          : value
        }
      </div>
    )

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
        <div className={classNames(classes.linkWrapper)}>
          <Select label={'Select'} />
        </div>
      </div>
    )
  }
})
