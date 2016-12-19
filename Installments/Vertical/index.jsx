import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import uncontrolled from '../../decorators/uncontrolled'
import defaultStyles from './styles.scss'
import debounce from '../../lib/debounce'
import compose from '../../lib/compose'

const baseClass = 'installments--vertical'
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

  const left = selected.offsetLeft + BORDER_SIZE
  const top = selected.offsetTop + BORDER_SIZE
  const width = selected.offsetWidth
  const height = selected.offsetHeight

  return {
    left,
    top,
    width,
    height
  }
}

const Vertical = React.createClass({
  displayName: 'Installments.Vertical',

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
    id: PropTypes.string,
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

    this.setHighlightPosition(calculateHighlightPosition(this.getSelectedLabel()))
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

  resetHighlightPosition () {
    this.setHighlightPosition({
      width: 0,
      height: 0,
      left: 0,
      top: 0
    })
    this.refs.highlight.style.display = 'none'

    setTimeout(() => {
      this.refs.highlight.style.display = 'block'
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
      id,
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

    const ids = id
      ? {
        row: `${id}__row`,
        highlight: `${id}__highlight`
      } : {}

    return (<div
      className={classNames(baseClass, className)}
      id={id}
      style={{
        ...dynamicStyles,
        ...style
      }}
      {...remainingProps}>
      <div
        className={classNames(classes.row)}
        id={ids.row}>
        {options.map(({ key, content }, index) => {
          const id = `${name}-${key}`
          const isFirst = index === 0
          const isLast = index === options.length - 1

          const ids = {
            label: `${id}__label`,
            content: `${id}__content`
          }

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
            id={ids.label}
            style={customize
              ? cellDynamicStyles(customize, id === this.state.hover, isFirst, isLast)
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
              )}
              id={ids.content}>
              {content}
            </div>
            <span
              className={classNames(classes.cellHighlight)}
              style={{...highlightDynamicStyles}}
            />
          </label>
        })}
      </div>
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

const cellDynamicStyles = ({ borderRadius, borderColor, borderColorSelected, labelColor }, hovered, isFirst, isLast) => ({
  borderTopLeftRadius: isFirst ? borderRadius : undefined,
  borderBottomLeftRadius: isFirst ? borderRadius : undefined,
  borderTopRightRadius: isLast ? borderRadius : undefined,
  borderBottomRightRadius: isLast ? borderRadius : undefined,
  color: hovered ? borderColorSelected : labelColor,
  borderColor
})

export default compose(
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
)(Vertical)
