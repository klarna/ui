import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function Paragraph (props) {
  const {
    className,
    design,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames(`cui__paragraph--${design}`, {
    condensed
  }, className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.designs = ['primary', 'secondary', 'legal']

Paragraph.defaultProps = {
  condensed: false,
  design: 'primary'
}

Paragraph.propTypes = {
  children: PropTypes.node,
  condensed: PropTypes.bool,
  design: PropTypes.oneOf(Paragraph.designs),
  className: PropTypes.string
}
