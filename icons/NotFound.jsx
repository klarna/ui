import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'
import File from './parts/File.jsx'

export default function NotFound ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(24, 22)'>
        <File />
        <path
          d='M37.7578,43.127 C34.5788,41.356 29.7988,39 24.9998,39 C20.2418,39 16.1508,40.987 12.4358,43.135 C11.9578,43.411 11.7938,44.023 12.0708,44.501 C12.3458,44.979 12.9568,45.143 13.4378,44.865 C16.9098,42.858 20.7138,41 24.9998,41 C29.3328,41 33.8008,43.211 36.7848,44.873 C36.9388,44.959 37.1058,45 37.2708,45 C37.6208,45 37.9618,44.815 38.1448,44.486 C38.4138,44.004 38.2398,43.396 37.7578,43.127' />
      </g>

      <g
        className={classNames('cui__illustration__fill')}>
        <circle cx='40.5' cy='50.5' r='2.5' stroke='none' />
        <circle cx='57.5' cy='50.5' r='2.5' stroke='none' />
      </g>
    </svg>
  )
}

NotFound.defaultProps = {
  color: 'blue',
  styles: {}
}

NotFound.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
