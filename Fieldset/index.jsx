import React, { PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Fieldset ({ className, children, margins, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames('fieldset', { 'default-margins': margins }, className)}
      {...props}>
      {children}
    </div>
  )
}

Fieldset.defaultProps = {
  margins: false
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  margins: PropTypes.bool,
  styles: PropTypes.object
}
