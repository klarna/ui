// Based on http://codepen.io/skuester/pen/Hejbz

import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const colors = {
  blue: [0, 116, 200],
  white: [255, 255, 255]
}
colors.default = [158, 158, 160]

const sizes = {
  big: 30,
  small: 15,
  tiny: 10
}
sizes.default = 20

const gradients = [
  {x1: 0, y1: '0', x2: '0', y2: '1'},
  {x1: '1', y1: '0', x2: '0', y2: '1'},
  {x1: '1', y1: '1', x2: '0', y2: '0'},
  {x1: '0', y1: '1', x2: '0', y2: '0'},
  {x1: '0', y1: '1', x2: '1', y2: '0'},
  {x1: '0', y1: '0', x2: '1', y2: '1'}
]

export default function Loader ({ className, color, size, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const _color = Array.isArray(color) ? color : colors[color] || colors.default
  const _size = sizes[size] || sizes.default
  const step = 0.2
  const stroke = 2
  const half = _size / 2
  const quarter = _size / 4
  const corner = _size * 0.433

  return (
    <svg width={_size} height={_size} className={classNames('loader', className)} viewBox={`-1 -1 ${_size + stroke} ${_size + stroke}`}>
      <defs>
        {
          gradients.map((props, index) => (
            <linearGradient key={`gradient-${index}`} id={`gradient-${_color.join('-')}-${index}`} gradientUnits='objectBoundingBox' {...props}>
              <stop offset='0%' stopColor={`rgba(${_color}, ${step * index})`} />
              <stop offset='100%' stopColor={`rgba(${_color}, ${step * (index + 1)})`} />
            </linearGradient>
          ))
        }
      </defs>
      <g fill='none' strokeWidth={stroke} transform={`translate(${half},${half})`}>
        <path d={`M ${corner},-${quarter} A ${half},${half} 0 0,1 ${corner},${quarter}`} stroke={`url(#gradient-${_color.join('-')}-0)`} />
        <path d={`M ${corner},${quarter} A ${half},${half} 0 0,1 0,${half}`} stroke={`url(#gradient-${_color.join('-')}-1)`} />
        <path d={`M 0,${half} A ${half},${half} 0 0,1 -${corner},${quarter}`} stroke={`url(#gradient-${_color.join('-')}-2)`} />
        <path d={`M -${corner},${quarter} A ${half},${half} 0 0,1 -${corner},-${quarter}`} stroke={`url(#gradient-${_color.join('-')}-3)`} />
        <path d={`M -${corner},-${quarter} A ${half},${half} 0 0,1 0,-${half}`} stroke={`url(#gradient-${_color.join('-')}-4)`} />
        <path d={`M 0,-${half} A ${half},${half} 0 0,1 ${corner},-${quarter}`} stroke={`url(#gradient-${_color.join('-')}-5)`} strokeLinecap='round'/>
      </g>
    </svg>
  )
}

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(colors)),
    PropTypes.array
  ]),
  size: PropTypes.oneOf(Object.keys(sizes)),
  styles: PropTypes.object
}
