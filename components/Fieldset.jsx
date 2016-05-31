import React, { PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/field.scss'

export default function Fieldset (props) {
  const {
    className,
    children,
    styles,
    ...remainingProps } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames('cui__fieldset', className)

  return (
    <div className={cls} {...remainingProps}>{children}</div>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
