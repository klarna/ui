import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'

import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import isThemeable from '../Text/isThemeable'
import childrenPropType from '../propTypes/children'

const baseClass = 'subtitle'

function Subtitle ({
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
    {
      condensed,
      'default-margins': margins
    },
    className
  )

  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  )
}

Subtitle.displayName = 'Subtitle'

Subtitle.defaultProps = {
  color: 'black',
  condensed: false,
  margins: false
}

Subtitle.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  id: PropTypes.string,
  margins: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default compose(
  themeable(isThemeable((customizations, {style}) => ({
    style: {
      color: customizations.color_header,
      ...style
    }
  }))),
  overridable(defaultStyles)
)(Subtitle)
