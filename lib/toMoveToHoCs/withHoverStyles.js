import React, {Component} from 'react'
import deepMerge from 'deepmerge'

export default hoverStyles => Target => {
  class WithHoverStyles extends Component {
    constructor () {
      super()

      this.state = {
        hovered: false
      }
    }

    render () {
      const {styles, onMouseEnter, onMouseLeave, ...props} = this.props
      const {hovered} = this.state

      return <Target
        onMouseEnter={(...args) => {
          this.setState({hovered: true})
          onMouseEnter && onMouseEnter(...args)
        }}
        onMouseLeave={(...args) => {
          this.setState({hovered: false})
          onMouseLeave && onMouseLeave(...args)
        }}
        styles={hovered ? deepMerge(hoverStyles, styles || {}) : styles}
        {...props}
      />
    }
  }

  return WithHoverStyles
}
