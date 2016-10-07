import React, { Component } from 'react'

export default function uncontrolled (Component, {defaultProp, prop, handler, reset}) {
  return class Uncontrolled extends Component {
    componentDidMount () {
      this.setState({
        [prop]: this.props[prop] != null
          ? this.props[prop] || ''
          : this.props[defaultProp]
      })
    }

    handleHandler (handler, e) {
      if (this.props[prop] == null) {
        this.setState({
          [prop]: e && e.target
            ? e.target.value
            : e
        })
      }

      handler && handler(e)
    }

    handleReset (handler, e) {
      if (this.props[prop] == null) {
        this.setState({
          [prop]: undefined
        })
      }

      handler && handler(e)
    }

    render () {
      const props = Object.keys(this.props).reduce((handledProps, key) => {
        switch (key) {
          case handler:
            return {
              ...handledProps,
              [handler]: this.handleHandler.bind(this, this.props[handler])
            }

          case reset:
            return {
              ...handledProps,
              [reset]: this.handleReset.bind(this, this.props[reset])
            }

          default:
            return {
              ...handledProps,
              [key]: this.props[key]
            }
        }
      }, {})

      return <Component
        {...props}
        {...this.state}
      />
    }
  }
}
