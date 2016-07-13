import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/link.scss'
import palette from './texts/palette'

export default function Link ({className, color, children, styles, customize, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('cui__link', color, className, {
    'dynamic-styling': customize
  })

  const customizedStyles = customize
    ? {
      color: customize.textColor
    }
    : undefined

  return (
    <a className={cls} style={customizedStyles} {...props}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  }),
  styles: PropTypes.object
}
