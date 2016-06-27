import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'
import File from './parts/File.jsx'

export default function Wrong ({ color, styles, className, ...props }) {
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
          d='M12.293,31.707 C12.488,31.902 12.744,32 13,32 C13.256,32 13.512,31.902 13.707,31.707 L16,29.414 L18.293,31.707 C18.488,31.902 18.744,32 19,32 C19.256,32 19.512,31.902 19.707,31.707 C20.098,31.316 20.098,30.684 19.707,30.293 L17.414,28 L19.707,25.707 C20.098,25.316 20.098,24.684 19.707,24.293 C19.316,23.902 18.684,23.902 18.293,24.293 L16,26.586 L13.707,24.293 C13.316,23.902 12.684,23.902 12.293,24.293 C11.902,24.684 11.902,25.316 12.293,25.707 L14.586,28 L12.293,30.293 C11.902,30.684 11.902,31.316 12.293,31.707' />
        <path
          d='M30.293,31.707 C30.488,31.902 30.744,32 31,32 C31.256,32 31.512,31.902 31.707,31.707 L34,29.414 L36.293,31.707 C36.488,31.902 36.744,32 37,32 C37.256,32 37.512,31.902 37.707,31.707 C38.098,31.316 38.098,30.684 37.707,30.293 L35.414,28 L37.707,25.707 C38.098,25.316 38.098,24.684 37.707,24.293 C37.316,23.902 36.684,23.902 36.293,24.293 L34,26.586 L31.707,24.293 C31.316,23.902 30.684,23.902 30.293,24.293 C29.902,24.684 29.902,25.316 30.293,25.707 L32.586,28 L30.293,30.293 C29.902,30.684 29.902,31.316 30.293,31.707' />
        <path
          d='M35.5,46 C34.121,46 33,44.879 33,43.5 L33,43 L38,43 L38,43.5 C38,44.879 36.879,46 35.5,46 M39,41 L12.937,41 C12.384,41 11.937,41.447 11.937,42 C11.937,42.553 12.384,43 12.937,43 L31,43 L31,43.5 C31,45.981 33.019,48 35.5,48 C37.981,48 40,45.981 40,43.5 L40,42 C40,41.447 39.553,41 39,41' />
      </g>
    </svg>
  )
}

Wrong.defaultProps = {
  color: 'blue',
  styles: {}
}

Wrong.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
