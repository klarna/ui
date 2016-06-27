import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function SMS ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(23, 22)'>
        <path
          d='M53,28 C53,29.654 51.654,31 50,31 L34.596,31 L29,36.414 L29,16 C29,14.346 30.346,13 32,13 L50,13 C51.654,13 53,14.346 53,16 L53,28 Z M40,44 L2,44 L2,9 C2,8.66 2.033,8.328 2.08,8 L39.92,8 C39.967,8.328 40,8.66 40,9 L40,11 L32,11 C29.243,11 27,13.243 27,16 L27,41.133 L35.404,33 L40,33 L40,44 Z M33,55 L9,55 C5.141,55 2,51.859 2,48 L2,46 L40,46 L40,48 C40,51.859 36.859,55 33,55 L33,55 Z M9,2 L33,2 C35.785,2 38.188,3.639 39.315,6 L2.685,6 C3.812,3.639 6.215,2 9,2 L9,2 Z M50,11 L42,11 L42,9 C42,4.037 37.963,0 33,0 L9,0 C4.037,0 0,4.037 0,9 L0,48 C0,52.963 4.037,57 9,57 L33,57 C37.963,57 42,52.963 42,48 L42,33 L50,33 C52.757,33 55,30.757 55,28 L55,16 C55,13.243 52.757,11 50,11 L50,11 Z' />
        <path
          d='M35,20.08 C33.917,20.08 33.038,20.955 33.038,22.04 C33.038,23.122 33.917,24 35,24 C36.083,24 36.962,23.122 36.962,22.04 C36.962,20.955 36.083,20.08 35,20.08' />
        <path
          d='M41,20.08 C39.917,20.08 39.038,20.955 39.038,22.04 C39.038,23.122 39.917,24 41,24 C42.083,24 42.962,23.122 42.962,22.04 C42.962,20.955 42.083,20.08 41,20.08' />
        <path
          d='M47,20.08 C45.917,20.08 45.038,20.955 45.038,22.04 C45.038,23.122 45.917,24 47,24 C48.083,24 48.962,23.122 48.962,22.04 C48.962,20.955 48.083,20.08 47,20.08' />
        <path
          d='M21,49 C20.172,49 19.5,49.672 19.5,50.5 C19.5,51.328 20.172,52 21,52 C21.828,52 22.5,51.328 22.5,50.5 C22.5,49.672 21.828,49 21,49'></path>
      </g>
    </svg>
  )
}

SMS.defaultProps = {
  color: 'blue',
  styles: {}
}

SMS.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
