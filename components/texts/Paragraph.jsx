import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

const classNames = classNamesBind.bind(styles)

export default function Paragraph ({ children, className, color, condensed, design, ...props }) {
  const cls = classNames(`cui__paragraph--${design}`, color, className, { condensed })

  return (
    <p className={cls} {...props}>
      {children}
    </p>
  )
}

Paragraph.designs = ['primary', 'secondary', 'legal']

Paragraph.defaultProps = {
  color: 'black',
  condensed: false,
  design: 'primary'
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  design: PropTypes.oneOf(Paragraph.designs)
}
