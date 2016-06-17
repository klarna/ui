import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function Paragraph ({
  children,
  className,
  color,
  condensed,
  margins,
  design,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    `cui__paragraph--${design}`,
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

Paragraph.designs = ['primary', 'secondary', 'legal']

Paragraph.defaultProps = {
  color: undefined,
  condensed: false,
  margins: false,
  design: 'primary',
  styles: {}
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  margins: PropTypes.bool,
  design: PropTypes.oneOf(Paragraph.designs),
  styles: PropTypes.object
}
