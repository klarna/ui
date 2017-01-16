import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '../styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'list--ordered'

export default function Ordered ({children, className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  return (
    <ol className={classNames(baseClass, className)} {...props}>
      {children}
    </ol>
  )
}

Ordered.displayName = 'List.Ordered'

Ordered.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  styles: PropTypes.object
}
