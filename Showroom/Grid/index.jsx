import React from 'react'
import { times } from 'ramda'

export default React.createClass({
  getInitialState () {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    }
  },

  render () {
    const {...props} = this.props
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
            width={width} height='1' x='0' y={i * 10 + 4}
          />,

          <rect
            style={{fill: '#f52727', opacity: 1}}
            width={width} height='1' x='0' y={i * 10 + 9}
          />
        ], Math.floor(height / 10))}
      </svg>
    )
  }
})
