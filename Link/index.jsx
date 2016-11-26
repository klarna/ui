import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import compose from '../lib/compose'
import themeable from '../decorators/themeable'
import overridable from '../decorators/overridable'

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

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.oneOf(palette),
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  }),
  styles: PropTypes.object
}

export default compose(
  themeable(function (customizations, props) {
    return {
      customize: {
        ...props.customize,
        textColor: customizations.color_link
      }
    }
  }),
  overridable(defaultStyles)
)(Link)
