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
          onBlur={handleBlur(this, onBlur)}
          onFocus={handleFocus(this, onFocus)}
        />
      )
    }
  }

  DecoratedComponent.displayName = Target.displayName || Target.name

  return DecoratedComponent
}

const handleBlur = (component, onBlur) => (e) => {
  component.setState({ focus: undefined })

  onBlur && onBlur(e)
}

const handleFocus = (component, onFocus) => (key, e)  => {
  component.setState({ focus: key })

  onFocus && onFocus(key, e)
}
