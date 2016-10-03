import React, { Component } from 'react'

export default function uncontrolled (Component, {defaultProp, prop, handler}) {
  return class Uncontrolled extends Component {
    componentDidMount () {
      this.setState({
        [prop]: this.props[prop] != null
          ? this.props[prop] || ''
          : this.props[defaultProp]
      })
    }

    handleHandler (handler, e) {
      if (this.props[prop]) {
        handler && handler(e)
      } else {
        this.setState({
          [prop]: e && e.target
            ? e.target.value
            : e
        })
        handler
      }
    }

    render () {
      const consumerHandler = this.props[handler]

      const props = Object.keys(this.props)
        .filter(k => k !== handler)
        .reduce((x, k) => ({
          ...x,
          [k]: this.props[k]
        }), {})

      const handlerProp = {
        [handler]: this.handleHandler.bind(this, consumerHandler)
      }

      return <Component
        {...props}
        {...this.state}
        {...handlerProp}
      />
    }
  }
}
