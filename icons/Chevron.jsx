import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

const Chevron = function ({ d, color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'tiny', color, className)}
      viewBox='0 0 21 21'
      height='20px'
      width='20px'
      {...props}>
      <path
        className={classNames('illustration__stroke')}
        d={d}
        strokeLinecap='round' />
    </svg>
  )
}

Chevron.defaultProps = {
  color: 'blue',
  styles: {}
}

Chevron.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}

// The geometrical center would be starting at x = 8, y = 6, but because of
// https://medium.com/@erqiudao/the-play-button-is-not-optical-alignment-4cea11bda175#.3p6p4iry8
// it should be 1px off

export const Right = function (props) {
  return (<Chevron {...props} d='M9,6l4,4l-4,4' />)
}
Right.displayName = 'Chevron.Right'

export const Left = function (props) {
  return (<Chevron {...props} d='M11,6l-4,4l4,4' />)
}
Left.displayName = 'Chevron.Left'

export const Down = function (props) {
  return (<Chevron {...props} d='M6,9l4,4l4,-4' />)
}
Down.displayName = 'Chevron.Down'

export const Up = function (props) {
  return (<Chevron {...props} d='M6,11l4,-4l4,4' />)
}
Up.displayName = 'Chevron.Up'
