import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

import colors from '../icons/constants/colors'

const ProgressBar = ({ borderColor, fillColor, percentage, className, styles }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('progressbar', borderColor, className)}>
      <div className={classNames('progressbar-fill', fillColor)} style={{width: `${percentage}%`}}>
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  borderColor: 'gray',
  fillColor: 'blue',
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
