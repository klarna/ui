import React from 'react'
import { times } from 'ramda'

export default function Grid ({
  halfLine,
  height,
  line,
  offsets,
  width,
  ...props
}) {
  return <svg focusable='false' width={width} height={height}
    style={{
      left: 0,
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      zIndex: 10000
    }}
    {...props}>

    {times((i) => [
      <rect
        style={{fill: '#f52727', opacity: 0.3}}
        width={width} height='1'
        x={offsets.left} y={i * 10 + (halfLine - 1) + offsets.top}
      />,

      <rect
        style={{fill: '#f52727', opacity: 0.9}}
        width={width} height='1'
        x={offsets.left} y={i * 10 + (line - 1) + offsets.top}
      />
    ], Math.floor(height / 10))}

    {times((i) => [
      <rect
        style={{fill: '#f52727', opacity: 0.3}}
        width='1' height={height}
        x={i * 10 + (halfLine - 1) + offsets.left} y={offsets.top}
      />,

      <rect
        style={{fill: '#f52727', opacity: 0.9}}
        width='1' height={height}
        x={i * 10 + (line - 1) + offsets.left} y={offsets.top}
      />
    ], Math.floor(width / 10))}
  </svg>
}
