import React, {PropTypes} from 'react'
import classNamesBind from 'classNames/bind'
import overridable from '../decorators/overridable'
import defaultStyles from './styles.scss'

const baseClass = 'strong'

function Strong ({children, styles}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <strong className={classNames(baseClass)}>
    {children}
  </strong>
}

Strong.defaultProps = {
  styles: {}
}

Strong.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
}

export default overridable(Strong)
