import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'

import defaultStyles from './styles.scss'
import palette from '../../lib/palette'
import isThemeable from '../../Text/isThemeable'
import childrenPropType from '../../propTypes/children'

const baseClass = 'title--primary'

function Primary ({
  children,
  className,
  color,
  margins,
  small,
  strong,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    baseClass,
    color,
    className,
    {
      'default-margins': margins,
      small,
      strong
    }
  )

  return (
    <h1 className={cls} {...props}>
      {children}
    </h1>
  )
}

Primary.displayName = 'Title.Primary'

Primary.defaultProps = {
  color: 'black',
  small: false,
  strong: false,
  margins: false,
  styles: {}
}

Primary.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  id: PropTypes.string,
  margins: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool,
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
)(Primary)
