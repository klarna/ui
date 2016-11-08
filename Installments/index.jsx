import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import debounce from '../lib/debounce'

import compose from 'ramda/src/compose'
import {
  overridable,
  themeable,
  uncontrolled
} from '@klarna/higher-order-components'

const baseClass = 'installments'
const TRANSITION_DURATION = 500

const classes = {
  input: `${baseClass}__input`,
  cellContent: `${baseClass}__cell__content`,
  row: `${baseClass}__row`,
  cell: `${baseClass}__cell`,
  cellHighlight: `${baseClass}__cell__highlight`
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
      previouslySelected: undefined,
      highlight: {
        position: {
          width: undefined,
          height: undefined,
          left: undefined,
          top: undefined
        },
        transitions: false
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

    this.debouncedResizeHandler = debounce(() => this.onResize())
    window.addEventListener('resize', this.debouncedResizeHandler)
    this.setHighlightPosition(calculateHighlightPosition(this.getSelectedLabel()))
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedResizeHandler)
  },

  componentWillReceiveProps (props) {
    if (props.value !== undefined) {
      const label = this.getSelectedLabel(props.value)
      this.setState({
        previouslySelected: this.props.value
      })

      this.setHighlightPosition(calculateHighlightPosition(label))

      if (this.state.highlight.transitions !== true) {
        setTimeout(() => {
          this.setHighlightTransitions(true)
        }, TRANSITION_DURATION)
      }
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
      highlight: {
        ...this.state.highlight,
        position: {
          ...this.state.highlight.position,
          ...position
        }
      }
    })
  },

  setHighlightTransitions (enabled) {
    this.setState({
      highlight: {
        ...this.state.highlight,
        transitions: enabled
      }
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
                { 'is-after-previously-selected': (previouslySelectedIndex >= 0) && (index === (previouslySelectedIndex + 1)) }
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
            </label>
        })}
      </div>
      <span className={classNames(
        classes.cellHighlight,
        { 'has-position': this.state.highlight.transitions }
      )} style={{
        ...highlightDynamicStyles,
        ...highlightPositionStyles,
        ...(selected !== undefined ? { opacity: 1 } : {})
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
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      labelColor: customizations.color_text
    }
  })),
  overridable(defaultStyles)
)(Installments)
