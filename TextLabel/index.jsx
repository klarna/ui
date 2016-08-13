import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function TextLabel ({
  className,
  children,
  margins,
  styles,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    'text-label',
    className,
    {
      'default-margins': margins
    }
  )

  return (
    <h4 className={cls} {...remainingProps}>{children}</h4>
  )
}

TextLabel.defaultProps = {
  margins: false,
  styles: {}
}

TextLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  margins: PropTypes.bool,
  styles: PropTypes.object
}
