import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

const baseClass = 'tooltip'

export const arrows = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'left', 'left-top', 'left-bottom',
  'right', 'right-top', 'right-bottom'
]

function Tooltip ({ className, arrow, children, inlined, inverse, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (<div
    className={classNames(baseClass, arrow, className, { inlined }, { inverse })} {...props}>
    {children}
  </div>)
}

Tooltip.displayName = 'Tooltip'

Tooltip.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.oneOf(arrows),
  children: childrenPropType,
  id: PropTypes.string,
  inlined: PropTypes.bool,
  inverse: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  overridable(defaultStyles)
)(Tooltip)
