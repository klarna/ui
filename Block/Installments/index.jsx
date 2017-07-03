import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../../propTypes/children'
import compose from 'ramda/src/compose'
import {withOverrideFromContext} from '@klarna/higher-order-components'

const baseClass = 'block--installments'

const classes = {
  title: `${baseClass}__title`,
  value: `${baseClass}__value`,
  valueContent: `${baseClass}__value__content`,
  valueContentClarification: `${baseClass}__value__content__clarification`,
  valueTitle: `${baseClass}__value__title`,
  values: `${baseClass}__values`
}

function InstallmentsMain ({ className, children, leftAlign, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(baseClass, className, 'left-align': leftAlign)} {...props}>
      {children}
    </div>
  )
}

InstallmentsMain.displayName = 'Block.Installments.Main'

InstallmentsMain.propTypes = {
  leftAlign: PropTypes.bool,
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Main = compose(
  withOverrideFromContext({ styles: defaultStyles })
)(InstallmentsMain)

function InstallmentsTitle ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.title, className)} {...props}>
      {children}
    </div>
  )
}

InstallmentsTitle.displayName = 'Block.Installments.Title'

InstallmentsTitle.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Title = compose(
  withOverrideFromContext({ styles: defaultStyles })
)(InstallmentsTitle)

function InstallmentsContent ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.values, className)} {...props}>
      {children}
    </div>
  )
}

InstallmentsContent.displayName = 'Block.Installments.Content'

InstallmentsContent.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Content = compose(
  withOverrideFromContext({ styles: defaultStyles })
)(InstallmentsContent)

function InstallmentsValue ({ className, clarification, children, id, title, styles, value, ...props }) {
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

InstallmentsValue.displayName = 'Block.Installments.Value'

InstallmentsValue.propTypes = {
  clarification: PropTypes.string,
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired
}

export const Value = compose(
  withOverrideFromContext({ styles: defaultStyles })
)(InstallmentsValue)
