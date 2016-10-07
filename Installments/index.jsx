import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'installments'

const classes = {
  input: `${baseClass}__input`,
  cellContent: `${baseClass}__cell__content`,
  row: `${baseClass}__row`,
  cell: `${baseClass}__cell`,
  cellHighlight: `${baseClass}__cell__highlight`
}

export default React.createClass({
  displayName: 'Installments',

  propTypes: {
    options: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      content: PropTypes.isRequired
    })).isRequired,
    className: PropTypes.string,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired
    }),
    focus: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  },

  getInitialState () {
    return { hover: undefined }
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
      customize,
      focus,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      value: selected,
      style,
      styles,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({
      ...defaultStyles,
      ...styles
    })

    const dynamicStyles = customize
      ? {
        borderColor: customize.borderColor,
        borderRadius: customize.borderRadius
      }
      : {}

    const highlightDynamicStyles = customize
      ? {
        borderColor: customize.borderColorSelected,
        borderRadius: customize.borderRadius
      }
      : undefined

    const selectedIndex = options.findIndex((option) => (
      option.key === selected
    ))
    return (<div
      className={classNames(baseClass, className)}
      style={{
        ...dynamicStyles,
        ...style
      }}
      {...remainingProps}>
      <div className={classNames(classes.row)}>
        {options.map(({ key, content }, index) => {
          const id = `${name}-${key}`
          return <label
            key={`cell-${id}`}
            className={classNames(
              classes.cell,
              { 'is-focused': focus === key },
              { 'is-selected': key === selected },
              { 'is-after-selected': (selectedIndex >= 0) && (index === (selectedIndex + 1)) }
            )}
            style={customize
              ? cellDynamicStyles(customize, id === this.state.hover)
              : undefined}
            onMouseEnter={() => onCellMouseEnter(this)(id)}
            onMouseLeave={() => onCellMouseLeave(this)(id)}>
            <input
              className={classNames(classes.input)}
              type='radio'
              name={name}
              ref={key}
              id={id}
              onBlur={onBlur}
              onChange={onChange && (() => onChange(key))}
              onFocus={(e) => onFocus && onFocus(key, e)}
              checked={key === selected}
              value={key}
              />
            <div
              className={classNames(
                classes.cellContent
              )}>
              {content}
            </div>
            <span className={classNames(classes.cellHighlight)} style={highlightDynamicStyles} />
          </label>
        })}
      </div>
    </div>)
  }
})

const onCellMouseEnter = (component) => (id) => {
  component.setState({ hover: id })
}

const onCellMouseLeave = (component) => () =>
  component.setState({ hover: undefined })

const cellDynamicStyles = ({ borderColor, borderColorSelected, labelColor }, hovered) =>
  hovered
    ? { borderColor, color: borderColorSelected }
    : { borderColor, color: labelColor }
