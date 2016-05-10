import React, { PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/field.scss'

const classNames = classNamesBind.bind(styles)

export default function Fieldset (props) {
  const {
    className,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__fieldset', className)

  return (
    <div className={cls} {...remainingProps}>{children}</div>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
