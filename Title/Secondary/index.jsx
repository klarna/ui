import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import {overridable, withTheme} from '@klarna/higher-order-components'

import defaultStyles from './styles.scss'
import palette from '../../lib/palette'
import isThemeable from '../../Text/isThemeable'
import childrenPropType from '../../propTypes/children'

const baseClass = 'title--secondary'

function Secondary ({
  className,
  color,
  condensed,
  children,
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
    <h2 className={cls} {...props}>
      {children}
    </h2>
  )
}

Secondary.displayName = 'Title.Secondary'

Secondary.defaultProps = {
  color: 'black',
  condensed: false,
  margins: false,
  styles: {}
}

Secondary.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  id: PropTypes.string,
  margins: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default compose(
  withTheme(isThemeable((customizations, {style}) => ({
    style: {
      color: customizations.color_header,
      ...style
    }
  }))),
  overridable(defaultStyles)
)(Secondary)
