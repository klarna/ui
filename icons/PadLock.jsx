import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function PadLock ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(24, 18)'>
        <path d='M49.595 45.283c0 6.983-5.255 12.453-11.962 12.453h-21.51c-7.016 0-12.943-5.702-12.943-12.453v-16.98h46.415v16.98zM8.84 18.113c0-8.888 7.698-15.85 17.526-15.85h1.025c9.107 0 15.842 6.017 16.493 14.492.034.446.05.9.05 1.358 0 .626.507 1.132 1.133 1.132s1.132-.506 1.132-1.132C46.198 7.618 38.288 0 27.39 0h-1.024C15.27 0 6.576 7.956 6.576 18.113v7.925H.916v19.245C.915 53.26 7.878 60 16.123 60h21.51c7.976 0 14.225-6.464 14.225-14.717V26.038H8.84v-7.925z' />
        <path d='M43.936 18.113H46.2v7.925h-2.264zM26.038 36.226h2.264V48.68h-2.264z' />
        <rect x='24.906' y='35.094' width='4.528' height='4.528' rx='2.264' />
      </g>
    </svg>
  )
}

PadLock.defaultProps = {
  color: 'blue',
  styles: {}
}

PadLock.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
