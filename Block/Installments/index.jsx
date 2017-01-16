import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'block--installments'

const classes = {
  title: `${baseClass}__title`,
  value: `${baseClass}__value`,
  valueContent: `${baseClass}__value__content`,
  valueContentClarification: `${baseClass}__value__content__clarification`,
  valueTitle: `${baseClass}__value__title`,
  values: `${baseClass}__values`
}

export function Main ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(baseClass, className)} {...props}>
      {children}
    </div>
  )
}

Main.displayName = 'Block.Installments.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Title ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.title, className)} {...props}>
      {children}
    </div>
  )
}

Title.displayName = 'Block.Installments.Title'

Title.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Content ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.values, className)} {...props}>
      {children}
    </div>
  )
}

Content.displayName = 'Block.Installments.Content'

Content.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Value ({ className, clarification, children, id, title, styles, value, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const ids = id
    ? {
      content: `${id}__content`,
      clarification: `${id}__clarification`,
      title: `${id}__title`
    } : {}

  return (
    <div
      className={classNames(classes.value, className)}
      id={id}
      {...props}>
      <div
        className={classNames(classes.valueTitle)}
        id={ids.title}>
        {title}
      </div>

      <div
        className={classNames(classes.valueContent)}
        id={ids.content}>
        {value}
        {clarification && (
          <span
            className={classNames(classes.valueContentClarification)}
            id={ids.clarification}>
            {clarification}
          </span>
        )}
      </div>
    </div>
  )
}

Value.displayName = 'Block.Installments.Value'

Value.propTypes = {
  clarification: PropTypes.string,
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired
}
