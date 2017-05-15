import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Bank ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'tiny', color, className)}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      {...props}>
      <defs>
        <path
          d='M9.56988525,3.26882172 C9.80743107,3.12035558 10.1977539,3.12359619 10.4301147,3.26882172 L17.1438599,7.46491241 C17.616693,7.76043313 17.5553691,8 16.9991283,8 L3.00087166,8 C2.4481055,8 2.38585663,7.75883961 2.85614014,7.46491241 L9.56988525,3.26882172 Z'
          id='path-1'
        />
        <mask
          id='mask-2'
          maskContentUnits='userSpaceOnUse'
          maskUnits='objectBoundingBox'
          x='0' y='0'
          width='14.9203181'
          height='4.84131601'
          fill='white'>
          <use xlinkHref='#path-1' />
        </mask>
      </defs>
      <g
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <path
          className={classNames('illustration__fill')}
          d='M3,16.5 C3,16.2238576 3.21990657,16 3.49826741,16 L16.5017326,16 C16.7769181,16 17,16.2319336 17,16.5 C17,16.7761424 16.7800934,17 16.5017326,17 L3.49826741,17 C3.22308192,17 3,16.7680664 3,16.5 Z M5,9.49100518 C5,9.21983051 5.23193359,9 5.5,9 C5.77614237,9 6,9.22788048 6,9.49100518 L6,15 L5,15 L5,9.49100518 Z M8,9.49100518 C8,9.21983051 8.23193359,9 8.5,9 C8.77614237,9 9,9.22788048 9,9.49100518 L9,15 L8,15 L8,9.49100518 Z M11,9.49100518 C11,9.21983051 11.2319336,9 11.5,9 C11.7761424,9 12,9.22788048 12,9.49100518 L12,15 L11,15 L11,9.49100518 Z M14,9.49100518 C14,9.21983051 14.2319336,9 14.5,9 C14.7761424,9 15,9.22788048 15,9.49100518 L15,15 L14,15 L14,9.49100518 Z'
        />
        <use
          className={classNames('illustration__stroke')}
          mask='url(#mask-2)'
          strokeWidth='2'
          xlinkHref='#path-1'
        />
      </g>
    </svg>
  )
}

Bank.defaultProps = {
  color: 'blue',
  styles: {}
}

Bank.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
