import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'text-label'

export default function TextLabel ({className, children, margins, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h4
      className={classNames(baseClass, className, {'default-margins': margins})}
      {...props}>
      {children}
    </h4>
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
