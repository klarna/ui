import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../decorators/themeable'
import defaultStyles from './styles.scss'

const baseClass = 'installments'

const classes = {
  input: `${baseClass}__input`,
  cellContent: `${baseClass}__cell__content`,
  row: `${baseClass}__row`,
  cell: `${baseClass}__cell`,
  cellHighlight: `${baseClass}__cell__highlight`,
  cellTransitionHighlight: `${baseClass}__cell__transition-highlight`
}

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const Installments = React.createClass({
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
    return { hover: undefined, previouslySelected: undefined }
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

  onChangeHandler (key) {
    // This is just here for debug output
    const indexByKey = findIndexOfOptionKey(this.props.options)
    const output = (value) => `${value} (${indexByKey(value)})`
    const difference = (selected, previously) => (previously !== undefined) ? (indexByKey(selected) - indexByKey(previously)) : 0

    console.table({
      previouslySelected: {from: output(this.state.previouslySelected), to: output(this.props.value), difference: difference(this.props.value, this.state.previouslySelected)},
      selected: {from: output(this.props.value), to: output(key), difference: difference(key, this.props.value)}
    })
    // End debug output

    this.setState({
      previouslySelected: this.props.value
    })

    return this.props.onChange && this.props.onChange(key)
  },

  render () {
    const {
      className,
      customize,
      focus,
      name,
      onBlur,
      onFocus,
      options,
      value: selected,
      style,
      styles,
      ...remainingProps
    } = this.props

    const {
      previouslySelected
    } = this.state

    const classNames = classNamesBind.bind({
      ...defaultStyles,
      ...styles
    })

    const indexByKey = findIndexOfOptionKey(options)
    const selectedIndex = indexByKey(selected)
    const previouslySelectedIndex = indexByKey(this.state.previouslySelected)
    const difference = (this.state.previouslySelected !== undefined) ? (selectedIndex - previouslySelectedIndex) : 0

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

    const highlightTransitionDynamicStyles = {
      ...highlightDynamicStyles,
      transform: `translateX(calc(${100*difference}% - ${difference}px))`
    }

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
          const transform = (key === previouslySelected) ? highlightTransitionDynamicStyles : undefined
          return <label
            key={`cell-${id}`}
            className={classNames(
              classes.cell,
              { 'is-focused': focus === key },
              { 'is-selected': key === selected },
              { 'is-after-selected': (selectedIndex >= 0) && (index === (selectedIndex + 1)) },
              { 'is-previously-selected': key === previouslySelected }
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
              onChange={() => this.onChangeHandler(key)}
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
            <span className={classNames(classes.cellTransitionHighlight)} style={transform} />
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

export default themeable(Installments, (customizations, props) => ({
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderColorSelected: customizations.color_border_selected,
    borderRadius: customizations.radius_border,
    labelColor: customizations.color_text
  }
}))
