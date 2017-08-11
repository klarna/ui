import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import setDisplayName from 'recompose/setDisplayName'
import compose from 'ramda/src/compose'
import {withOverrideFromContext} from '@klarna/higher-order-components'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

const baseClass = 'strong'

function Strong ({children, styles, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <strong className={classNames(baseClass)} {...props}>
    {children}
  </strong>
}

Strong.displayName = 'Strong'

Strong.defaultProps = {
  styles: {}
}

Strong.propTypes = {
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  setDisplayName('Strong'),
  withOverrideFromContext
)(Strong)
