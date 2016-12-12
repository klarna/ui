import React, { Component } from 'react'

export default function (Target) {
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
          onBlur={handleBlur(this, onBlur)}
          onFocus={handleFocus(this, onFocus)}
        />
      )
    }
  }

  DecoratedComponent.displayName = Target.displayName || Target.name

  return DecoratedComponent
}

const handleBlur = function (component, onBlur) {
  return function (e) {
    component.setState({ focus: undefined })

    onBlur && onBlur(e)
  }
}

const handleFocus = function (component, onFocus) {
  return function (e) {
    component.setState({ focus: true })

    onFocus && onFocus(e)
  }
}
