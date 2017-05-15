import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../../lib/palette'
import childrenPropType from '../../propTypes/children'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

const baseClass = 'paragraph--legal'

function Legal ({
  children,
  className,
  color,
  condensed,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    baseClass,
    color,
    className,
    {
      condensed,
      'default-margins': margins
    }
  )

  return (
    <p className={cls} {...props}>
      {children}
    </p>
  )
}

Legal.displayName = 'Paragraph.Legal'

Legal.defaultProps = {
  color: undefined,
  condensed: false,
  margins: false
}

Legal.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  id: PropTypes.string,
  margins: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  overridable(defaultStyles)
)(Legal)
