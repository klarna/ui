import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../../lib/palette'

const baseClass = 'title--primary'

export default function Primary ({
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
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  margins: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool,
  styles: PropTypes.object
}
