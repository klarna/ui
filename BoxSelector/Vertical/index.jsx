import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import {
  themeable,
  overridable,
  uncontrolled,
  uniqueName
} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'
import defaultStyles from './styles.scss'
import getActiveElement from '../../lib/getActiveElement'

const baseClass = 'box-selector--vertical'

const classes = {
  input: `${baseClass}__input`,
  cellContent: `${baseClass}__cell__content`,
  row: `${baseClass}__row`,
  cell: `${baseClass}__cell`,
  cellHighlight: `${baseClass}__cell__highlight`
}

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const Vertical = React.createClass({
  displayName: 'BoxSelector.Vertical',

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
      previouslySelected: undefined
    }
  },

  componentDidMount () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  componentWillReceiveProps (props) {
    if (props.value !== undefined) {
      this.setState({
        previouslySelected: this.props.value
      })
    }
  },

  componentDidUpdate () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  getSelectedLabel (key) {
    return this.refs[`${key || this.props.value}-label`]
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
  borderTopRightRadius: isFirst ? borderRadius : undefined,
  borderBottomLeftRadius: isLast ? borderRadius : undefined,
  borderBottomRightRadius: isLast ? borderRadius : undefined,
  color: hovered ? borderColorSelected : labelColor,
  borderColor
})

export default compose(
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => value => value
    }
  }),
  themeable((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      labelColor: customizations.color_text,
      ...customize
    }
  })),
  overridable(defaultStyles),
  uniqueName
)(Vertical)
