import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const colors = ['blue', 'light-blue', 'gray']

const ProgressBar = ({ borderColor, fillColor, percentage, className, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('progressbar', borderColor, className)} {...props}>
      <div className={classNames('progressbar-fill', fillColor)} style={{width: `${percentage}%`}}>
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  borderColor: 'gray',
  fillColor: 'light-blue',
  styles: {}
}

ProgressBar.propTypes = {
  borderColor: PropTypes.oneOf(colors),
  fillColor: PropTypes.oneOf(colors),
  className: PropTypes.string,
  styles: PropTypes.object,
  percentage: PropTypes.number.isRequired
}

export default ProgressBar
