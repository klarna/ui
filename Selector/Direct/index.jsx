import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import {Right} from '../../icons/Chevron'

const baseClass = 'selector--direct'

const classes = {
  icon: `${baseClass}__icon`,
  input: `${baseClass}__input`,
  item: `${baseClass}__item`,
  label: `${baseClass}__label`,
  description: `${baseClass}__description`
}

export default React.createClass({
  displayName: 'Selector.Direct',

  propTypes: {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    styles: PropTypes.object
  },

  render () {
    const {
      className,
      data,
      id,
      onSelect,
      styles,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const ids = id
      ? {
        description: (key) => `${id}__${key}__description`,
        icon: (key) => `${id}__icon`,
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
        {data.map(({ key, label, description }) => [
          <a
            href={`#${key}`}
            id={ids.option(key)}
            onClick={(e) => {
              e.preventDefault()
              onSelect && onSelect(key)
            }}
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
        ])}
      </div>
    )
  }
})
