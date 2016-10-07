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
      if (this.props[prop] != null) {
        handler && handler(e)
      } else {
        this.setState({
          [prop]: e && e.target
            ? e.target.value
            : e
        })

        handler && handler(e)
      }
    }

    handleReset (handler, e) {
      if (this.props[prop] != null) {
        handler && handler(e)
      } else {
        this.setState({
          [prop]: undefined
        })

        handler && handler(e)
      }
    }

    render () {
      const consumerHandler = this.props[handler]
      const consumerReset = this.props[reset]

      const props = Object.keys(this.props)
        .filter((key) => key !== handler)
        .reduce((filteredProps, key) => ({
          ...filteredProps,
          [key]: this.props[key]
        }), {})

      const handlerProps = {
        [handler]: this.handleHandler.bind(this, consumerHandler),
        [reset]: this.handleReset.bind(this, consumerReset)
      }

      return <Component
        {...props}
        {...this.state}
        {...handlerProps}
      />
    }
  }
}
