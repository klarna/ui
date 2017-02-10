import React, {Component} from 'react'
import deepMerge from 'deepmerge'

export default hoverStyles => Target => {
  class WithHoverStyles extends Component {
    constructor () {
      super()

      this.state = {
        touched: false
      }
    }

    render () {
      const {styles, onTouchStart, onTouchEnd, ...props} = this.props
      const {touched} = this.state

      return <Target
        onTouchStart={(...args) => {
          this.setState({touched: true})
          onTouchStart && onTouchStart(...args)
        }}
        onTouchEnd={(...args) => {
          this.setState({touched: false})
          onTouchEnd && onTouchEnd(...args)
        }}
        styles={touched ? deepMerge(hoverStyles, styles || {}) : styles}
        {...props}
      />
    }
  }

  return WithHoverStyles
}
