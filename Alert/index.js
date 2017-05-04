import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

const baseClass = 'alert'

const classes = {
  error: `${baseClass}--error`,
  paragraph: `${baseClass}__paragraph`,
  title: `${baseClass}__title`,
  warning: `${baseClass}--warning`
}

export function AlertWarning ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.warning, className)}
      {...remainingProps}>
      {children}
    </div>
  )
}

AlertWarning.displayName = 'Alert.Warning'

AlertWarning.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Warning = compose(
  overridable(defaultStyles)
)(AlertWarning)
