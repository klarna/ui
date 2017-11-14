import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withTheme, withOverrideFromContext} from '@klarna/higher-order-components'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import {Right} from '../../icons/Chevron'

const baseClass = 'selector--direct'

const classes = {
  icon: `${baseClass}__icon`,
  input: `${baseClass}__input`,
  item: `${baseClass}__item`,
  label: `${baseClass}__label`,
  description: `${baseClass}__description`,
  bordersHack: `${baseClass}__bordersHack`
}

const SelectorDirect = React.createClass({
  displayName: 'Selector.Direct',

  propTypes: {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    id: PropTypes.string,
    onSelect: PropTypes.func,
    styles: PropTypes.object
  },

  getInitialState () {
    return {
      hover: undefined
    }
  },

  onOptionMouseEnter (key) {
    this.setState({ hover: key })
  },

  onOptionMouseLeave (key) {
    this.setState({ hover: undefined })
  },

  render () {
    const {
      className,
      customize,
      data,
      id,
      onSelect,
      styles,
      ...remainingProps
    } = this.props
    const useDynamicStyles = !!customize

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const ids = id
      ? {
        description: (key) => `${id}__${key}__description`,
        icon: (key) => `${id}__${key}__icon`,
        label: (key) => `${id}__${key}__label`,
        option: (key) => `${id}__${key}__option`
      } : {
        description: () => {},
        icon: () => {},
        label: () => {},
        option: () => {}
      }

    return (
      <div
        className={classNames(baseClass, 'title', className)}
        id={id}
        {...remainingProps}>
        {data.map(({ key, label, description }) => {
          const isHovered = this.state.hover === key
          const dynamicBorderStyles = useDynamicStyles
            ? {
              borderTopColor: isHovered ? customize.borderColorHovered : customize.borderColor,
              borderBottomColor: isHovered ? customize.borderColorHovered : customize.borderColor
            }
            : undefined

          return (
            <a
              href={`#${key}`}
              id={ids.option(key)}
              onMouseEnter={this.onOptionMouseEnter.bind(this, key)}
              onMouseLeave={this.onOptionMouseLeave.bind(this, key)}
              onClick={(e) => {
                e.preventDefault()
                onSelect && onSelect(key)
              }}
              style={dynamicBorderStyles}
              className={classNames(classes.item)}
              key={key}>
              <div
                className={classNames(classes.label)}
                id={ids.label(key)}>
                {label}
              </div>
              {
                description && (
                  <div
                    className={classNames(classes.description)}
                    id={ids.description(key)}>
                    {description}
                  </div>
                )
              }
              <Right
                className={classNames(classes.icon)}
                id={ids.icon(key)}
                color='black'
              />
            </a>
          )
        })}
      </div>
    )
  }
})

export default compose(
  setDisplayName('Selector.Direct'),
  withTheme((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderColorHovered: customizations.color_border_selected,
      ...customize
    }
  })),
  withOverrideFromContext
)(SelectorDirect)
