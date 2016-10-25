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

const TARGET_FPS = 60

const requestAnimationFrame = (fn) => {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(fn)
  } else {
    setTimeout(fn, 1000 / TARGET_FPS)
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

const vendorPrefixTransformation = (transformation) => ({
  msTransform: transformation,
  WebkitTransform: transformation,
  transform: transformation
})

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const calculateHighlightPosition = (selected) => {
  if (!selected) {
    return {}
  }

  const BORDER_SIZE = 1

  const left = selected.offsetLeft
  const top = selected.offsetTop
  const width = selected.offsetWidth + BORDER_SIZE * 2
  const height = selected.offsetHeight + BORDER_SIZE * 2

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

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedResizeHandler)
  },

  componentWillReceiveProps (props) {
    if (props.value !== undefined) {
      const label = this.getSelectedLabel(props.value)
      this.setHighlightPosition(calculateHighlightPosition(label))
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

  onResize () {
    this.setHighlightPosition(calculateHighlightPosition(this.getSelectedLabel()))
  },

  getSelectedLabel (key) {
    return this.refs[`${key || this.props.value}-label`]
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
      onChange,
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
      width: this.state.highlightPosition.width,
      height: this.state.highlightPosition.height,
      ...vendorPrefixTransformation(`translate(${this.state.highlightPosition.left}px, ${this.state.highlightPosition.top}px)`)
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
              onChange={() => onChange && onChange(key)}
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
