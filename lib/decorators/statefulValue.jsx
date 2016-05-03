import React, { Component } from 'react'

export default (Target) => {
  class DecoratedComponent extends Component {
    render () {
      const {
        onChange,
        ...props
      } = this.props

      return (
        <Target
          {...props}
          {...this.state}
          onChange={this.handleChange.bind(this, onChange)}
        />
      )
    }

    getInitialState () {
      return {
        value: undefined
      }
    }

    handleChange (onChange, e) {
      this.setState({
        value: e.target.value
      })

      onChange(e)
    }
  }

  DecoratedComponent.displayName = Target.name

  return DecoratedComponent
}
