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
  cellHighlight: `${baseClass}__cell__highlight`
}

const requestAnimationFrame = (fn) => {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(fn)
  } else {
    setTimeout(fn, 60)
  }
}

const debounce = (fn) => {
  let waiting = false

  return function (...args) {
    if (!waiting) {
      waiting = true

      requestAnimationFrame(() => {
        fn(...args)
        waiting = false
      })
    }
  }
}

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const calculateHighlightPosition = (selected) => {
  if (!selected) {
    return {}
  }

  const left = selected.offsetLeft
  const top = selected.offsetTop
  const width = selected.offsetWidth
  const height = selected.offsetHeight

  return {
    left,
    top,
    width,
    height
  }
}

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
    return {
      hover: undefined,
      highlightPosition: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }
    }
  },

  componentDidMount () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }

    this.debouncedResizeHandler = debounce(this.onResize)
    window.addEventListener('resize', this.debouncedResizeHandler)
    this.setHighlightPosition(calculateHighlightPosition(this.getSelectedLabel()))
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResizeHandler)
  },

  componentDidUpdate () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  onChangeHandler (e, key) {
    const label = e.target.parentNode
    this.setState({ highlightPosition: calculateHighlightPosition(label) })

    return this.props.onChange && this.props.onChange(key)
  },

  onResize () {
    const { top: currentTop, left: currentLeft } = this.state.highlightPosition
    const newPosition = calculateHighlightPosition(this.getSelectedLabel())

    this.setHighlightPosition(newPosition)
  },

  getSelectedLabel () {
    return this.refs[`${this.props.value}-label`]
  },

  setHighlightPosition (position) {
    this.setState({
      highlightPosition: position
    })
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

    const highlightPositionStyles = {
      width: this.state.highlightPosition.width + 2,
      height: this.state.highlightPosition.height + 2,
      transform: `translate(${this.state.highlightPosition.left}px, ${this.state.highlightPosition.top}px)`
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
            onMouseLeave={() => onCellMouseLeave(this)(id)}
            ref={`${key}-label`}>
            <input
              className={classNames(classes.input)}
              type='radio'
              name={name}
              ref={key}
              id={id}
              onBlur={onBlur}
              onChange={(e) => this.onChangeHandler(e, key)}
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
          </label>
        })}
      </div>
      <span className={classNames(classes.cellHighlight)} style={{
        ...highlightDynamicStyles,
        ...highlightPositionStyles,
        ...(selected !== undefined ? { opacity: 1 } : {})
      }} />
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
