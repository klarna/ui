import React, { PropTypes } from 'react'
import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'
import classNamesBind from 'classnames/bind'

import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import childrenPropType from '../propTypes/children'

const baseClass = 'link'

function Link ({
  children,
  className,
  color,
  customize,
  legal,
  style,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const customizations = customize
    ? { color: customize.textColor } : {}

  return <a
    className={classNames(
      baseClass,
      color,
      {'dynamic-styling': customize, legal},
      className
    )}
    style={{
      ...customizations,
      ...style
    }}
    {...props}>
    {children}
  </a>
}

Link.displayName = 'Link'

Link.propTypes = {
  children: childrenPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.oneOf(palette),
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  }),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      textColor: customizations.color_link
    }
  })),
  overridable(defaultStyles)
)(Link)
