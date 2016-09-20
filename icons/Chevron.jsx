import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

const Chevron = ({ d, color, styles, className, ...props }) => {
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

export const Right = (props) =>
  <Chevron {...props} d='M9,6l4,4l-4,4' />

export const Left = (props) =>
  <Chevron {...props} d='M11,6l-4,4l4,4' />

export const Down = (props) =>
  <Chevron {...props} d='M6,9l4,4l4,-4' />

export const Up = (props) =>
  <Chevron {...props} d='M6,11l4,-4l4,4' />
