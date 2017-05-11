import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function LocationPin ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'tiny', color, className)}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      {...props}>
      <path
        className={classNames('illustration__stroke')}
        d="M10,18.5 C10,18.5 4.5,12.4984131 4.5,7 C4.5,3.9624686 6.96243388,1.5 10,1.5 C13.0375661,1.5 15.5,3.96243388 15.5,7 C15.5,12.5012207 10,18.5 10,18.5 Z M10,9.5 C11.3807119,9.5 12.5,8.38071187 12.5,7 C12.5,5.61928813 11.3807119,4.5 10,4.5 C8.61928813,4.5 7.5,5.61928813 7.5,7 C7.5,8.38071187 8.61928813,9.5 10,9.5 Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

LocationPin.defaultProps = {
  color: 'blue',
  styles: {}
}

LocationPin.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
