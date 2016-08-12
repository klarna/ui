import React, { PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Fieldset (props) {
  const {
    className,
    children,
    styles,
    ...remainingProps } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames('fieldset', className)

  return (
    <div className={cls} {...remainingProps}>{children}</div>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
