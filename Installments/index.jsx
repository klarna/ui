import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../decorators/themeable'
import overridable from '../decorators/overridable'
import defaultStyles from './styles.scss'
import debounce from '../lib/debounce'
import compose from '../lib/compose'

const baseClass = 'installments'
const TRANSITION_DURATION = 500
const MOBILE_MAX_WIDTH = 569

const classes = {
  input: `${baseClass}__input`,
  cellContent: `${baseClass}__cell__content`,
  row: `${baseClass}__row`,
  cell: `${baseClass}__cell`,
  highlight: `${baseClass}__highlight`,
  labelHighlight: `${baseClass}__cell__highlight`
}

const vendorPrefixTransformation = (transformation) => ({
  msTransform: transformation,
  WebkitTransform: transformation,
  transform: transformation
})

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const calculateHighlightPosition = ({ label, highlight }) => {
  if (!label) {
    return {}
  }

  return {
    width: highlight.offsetWidth,
    height: highlight.offsetHeight,
    top: label.offsetTop,
    left: label.offsetLeft
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
      previouslySelected: undefined,
      highlight: {
        position: {
          width: undefined,
          height: undefined,
          left: undefined,
          top: undefined
        },
      },
      hasPosition: true,
      currentWidth: undefined
    }
  },

  componentDidMount () {
    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }

    const label = this.getSelectedLabel(this.props.value)
    const highlight = this.getSelectedHighlight(this.props.value)

    const position = calculateHighlightPosition({ label, highlight })

    this.setHighlightPosition(position)

    this.debouncedResizeHandler = debounce(() => this.onResize())
    window.addEventListener('resize', this.debouncedResizeHandler, false)
    window.addEventListener('orientationchange', this.onOrientationChange, false)
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedResizeHandler)
    window.removeEventListener('orientationchange', this.onOrientationChange)
  },

  componentWillReceiveProps (newProps) {
    if (newProps.value && newProps.value !== this.props.value) {
      this.setState({
        previouslySelected: this.props.value,
      })
      const label = this.getSelectedLabel(newProps.value)
      const highlight = this.getSelectedHighlight(newProps.value)

      const position = calculateHighlightPosition({ label, highlight })

      this.setHighlightPosition(position)

      if (this.state.transitionTimeout) {
        clearTimeout(this.state.transitionTimeout)
        this.setState({ transitionTimeout: undefined })
      }

      this.setState({ hasPosition: false })

      const newTimeout = setTimeout(() => {
        this.setState({ hasPosition: true })
      }, TRANSITION_DURATION)

      this.setState({ transitionTimeout: newTimeout })
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
    if ((this.refs.root.offsetWidth < MOBILE_MAX_WIDTH && this.state.currentWidth >= MOBILE_MAX_WIDTH) ||
    (this.refs.root.offsetWidth >= MOBILE_MAX_WIDTH && this.state.currentWidth < MOBILE_MAX_WIDTH)) {
      debugger
      const label = this.getSelectedLabel(this.props.value)
      const highlight = this.getSelectedHighlight(this.props.value)

      const position = calculateHighlightPosition({ label, highlight })

      this.setHighlightPosition(position)
    }
  },

  onOrientationChange () {
    const label = this.getSelectedLabel(this.props.value)
    const highlight = this.getSelectedHighlight(this.props.value)

    const position = calculateHighlightPosition({ label, highlight })

    this.setHighlightPosition(position)
  },

  getSelectedLabel (key) {
    return this.refs[`${key || this.props.value}-label`]
  },

  getSelectedHighlight (key) {
    return this.refs[`${key || this.props.value}-labelHighlight`]
  },

  setHighlightPosition (position) {
    this.setState({
      highlight: {
        ...this.state.highlight,
        position
      }
    })
  },

  setInTransition (enabled) {
    this.setState({
      inTransition: enabled
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
    const previouslySelectedIndex = indexByKey(previouslySelected)

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
      width: this.state.highlight.position.width,
      height: this.state.highlight.position.height,
      ...vendorPrefixTransformation(`translate(${this.state.highlight.position.left}px, ${this.state.highlight.position.top}px)`)
    }

    return (<div
      ref='root'
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
              { 'is-hovered': id === this.state.hover },
              { 'is-after-selected': (selectedIndex >= 0) && (index === (selectedIndex + 1)) },
              { 'is-previously-selected': key === previouslySelected },
              { 'is-after-previously-selected': !(key === selected) && (previouslySelectedIndex >= 0) && (index === (previouslySelectedIndex + 1)) }
            )}
            style={customize
              ? cellDynamicStyles(customize, id === this.state.hover)
              : undefined}
            onMouseEnter={() => onCellMouseEnter(this)(id)}
            onMouseLeave={() => onCellMouseLeave(this)(id)}
            onClick={() => onCellClick(this)(id)}
            onTouchStart={() => onCellTouchStart(this)(id)}
            onTouchMove={() => onCellTouchMove(this)(id)}
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
            <span
              ref={`${key}-labelHighlight`}
              className={classNames(
              classes.labelHighlight
            )} style={{...highlightDynamicStyles}}
            />
          </label>
        })}
      </div>
      <span
        ref='highlight'
        className={classNames(
        classes.highlight,
        { 'has-position': this.state.hasPosition }
      )} style={{
        ...highlightDynamicStyles,
        ...highlightPositionStyles
      }} />
    </div>)
  }
})

const hoverStartHandler = (component) => (id) => component.setState({ hover: id })
const hoverEndHandler = (component) => () => component.setState({hover: undefined})

const onCellTouchStart = hoverStartHandler
const onCellMouseEnter = hoverStartHandler

const onCellTouchMove = hoverEndHandler
const onCellMouseLeave = hoverEndHandler
const onCellClick = hoverEndHandler

const cellDynamicStyles = ({ borderColor, borderColorSelected, labelColor }, hovered) =>
  hovered
    ? { borderColor, color: borderColorSelected }
    : { borderColor, color: labelColor }

export default compose(
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      labelColor: customizations.color_text
    }
  })),
  overridable(defaultStyles)
)(Installments)
