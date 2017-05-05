import React, {Component, PropTypes} from 'react'
import deepMerge from 'deepmerge'
import {
  themeable,
  overridable,
  uncontrolled,
  uniqueName
} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'

import Option from '../Option'

const findIndexOfOptionKey = (options) => (key) => options.findIndex((option) => option.key === key)

const defaultStyles = {
  main: {
    base: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'relative',
      width: '100%'
    }
  },
  row: {
    base: {
      display: 'block'
    }
  }
}

class Vertical extends Component {
  constructor () {
    super()

    this.state = {
      previouslySelected: undefined
    }
  }

  componentWillReceiveProps (props) {
    if (props.value !== undefined) {
      this.setState({
        previouslySelected: this.props.value
      })
    }
  }

  render () {
    const {
      className,
      customize,
      id,
      name,
      onChange,
      options,
      value: selected,
      style,
      styles,
      ...props
    } = this.props

    const {
      previouslySelected
    } = this.state

    const finalStyles = deepMerge(defaultStyles, styles)

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
        row: `${id}__row`
      } : {}

    return <div
      id={id}
      style={finalStyles.main.base}
      {...props}>
      <div id={ids.row} style={finalStyles.row.base}>
        {options.map(({ key, content }, index) => {
          return <Option
            key={index}
            content={content}
            first={index === 0}
            last={index === options.length - 1}
            id={`${name}-${key}`}
            name={name}
            onChange={onChange}
            afterSelected={
              (selectedIndex >= 0) &&
              (index === (selectedIndex + 1))
            }
            previouslySelected={key === previouslySelected}
            afterPreviouslySelected={
              !(key === selected) &&
              (previouslySelectedIndex >= 0) &&
              (index === (previouslySelectedIndex + 1))
            }
            selected={key === selected}
            value={key}
          />
          // const id = `${name}-${key}`
          // const isFirst = index === 0
          // const isLast = index === options.length - 1
          //
          // return <label
          //   style={customize
          //     ? cellDynamicStyles(customize, id === this.state.hover, isFirst, isLast)
          //     : undefined}>
          // </label>
        })}
      </div>
    </div>
  }
}

Vertical.displayName = 'BoxSelector.Vertical'

Vertical.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    content: PropTypes.isRequired
  })).isRequired,
  customize: PropTypes.shape({
    borderColor: PropTypes.string.isRequired,
    borderColorSelected: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    labelColor: PropTypes.string.isRequired
  }),
  id: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  styles: PropTypes.object
}

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
