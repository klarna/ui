import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import {withOverrideFromContext, withTheme} from '@klarna/higher-order-components'
import classNamesBind from 'classnames/bind'

import defaultStyles from './styles.scss'
import palette from '../../lib/palette'
import isThemeable from '../../Text/isThemeable'
import childrenPropType from '../../propTypes/children'

const baseClass = 'paragraph--primary'

function Primary ({
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

Primary.displayName = 'Paragraph.Primary'

Primary.defaultProps = {
  color: undefined,
  condensed: false,
  margins: false
}

Primary.propTypes = {
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
      color: customizations.color_text,
      ...style
    }
  }))),
  withOverrideFromContext
)(Primary)
