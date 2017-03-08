import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import childrenPropType from '../propTypes/children'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

const baseClass = 'text-label'

function TextLabel ({
  className,
  children,
  color,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h4
      className={classNames(baseClass, color, {'default-margins': margins}, className)}
      {...props}>
      {children}
    </h4>
  )
}

TextLabel.displayName = 'TextLabel'

TextLabel.defaultProps = {
  margins: false,
  styles: {}
}

TextLabel.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  id: PropTypes.string,
  margins: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  overridable(defaultStyles)
)(TextLabel)
