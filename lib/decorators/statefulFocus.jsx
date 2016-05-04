import React, { Component } from 'react'

export default (Target) => {
  class DecoratedComponent extends Component {
    render () {
      const {
        onBlur,
        onFocus,
        ...props
      } = this.props

      return (
        <Target
          {...props}
          {...this.state}
          onBlur={this.handleBlur.bind(this, onBlur)}
          onFocus={this.handleFocus.bind(this, onFocus)}
        />
      )
    }

    handleBlur (onBlur, e) {
      this.setState({
        focus: undefined
      })

      onBlur(e)
    }

    handleFocus (onFocus, e) {
      this.setState({
        focus: true
      })

      onFocus(e)
    }
  }

  DecoratedComponent.displayName = Target.displayName || Target.name

  return DecoratedComponent
}
