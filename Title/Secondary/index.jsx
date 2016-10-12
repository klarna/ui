import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from './styles.scss'
import palette from '../../lib/palette'

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
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  margins: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default themeable(Secondary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))
