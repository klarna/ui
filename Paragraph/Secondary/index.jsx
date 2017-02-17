import React, { PropTypes } from 'react'
import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'
import classNamesBind from 'classnames/bind'

import defaultStyles from './styles.scss'
import palette from '../../lib/palette'
import isThemeable from '../../Text/isThemeable'
import childrenPropType from '../../propTypes/children'

const baseClass = 'paragraph--secondary'

function Secondary ({
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

Secondary.displayName = 'Paragraph.Secondary'

Secondary.defaultProps = {
  color: undefined,
  condensed: false,
  margins: false
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
  themeable(isThemeable((customizations, props) => ({
    style: {
      ...props.style,
      color: customizations.color_text_secondary
    }
  }))),
  overridable(defaultStyles)
)(Secondary)
