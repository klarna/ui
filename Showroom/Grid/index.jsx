import React from 'react'
import { times } from 'ramda'

export default React.createClass({
  defaultProps: {
    offsets: {
      left: 0,
      top: 0
    }
  },

  getInitialState () {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    }
  },

  render () {
    const {halfLine, line, offsets, ...props} = this.props
    const {height, width} = this.state

    return (
      <svg width={width} height={height}
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
    )
  }
})
