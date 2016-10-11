import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from './styles.scss'
import palette from '../../lib/palette'

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
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  margins: PropTypes.bool,
  styles: PropTypes.object
}

export default themeable(Primary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))
