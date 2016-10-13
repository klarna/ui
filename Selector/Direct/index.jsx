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
      onSelect,
      styles,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    return (
      <div
        className={classNames(baseClass, 'title', className)}
        {...remainingProps}>
        {data.map(({ key, label, description }) => [
          <a
            href={`#${key}`}
            onClick={(e) => {
              e.preventDefault()
              onSelect && onSelect(key)
            }}
            className={classNames(classes.item)}
            key={key}>
            <div
              className={classNames(classes.label)} >
              {label}
            </div>
            {
              description && (
                <div
                  className={classNames(classes.description)} >
                  {description}
                </div>
              )
            }
            <Right
              className={classNames(classes.icon)}
              color='black'
            />
          </a>
        ])}
      </div>
    )
  }
})
