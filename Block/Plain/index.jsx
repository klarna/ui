import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'block'

export default function Plain ({className, blue, children, styles, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, { blue }, className)}
      {...props}>
      {children}
    </div>
  )
}

Plain.displayName = 'Block.Plain'

Plain.propTypes = {
  blue: PropTypes.bool,
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}
