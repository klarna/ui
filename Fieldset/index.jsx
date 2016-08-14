import React, { PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Fieldset ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames('fieldset', className)}
      {...props}>
      {children}
    </div>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
