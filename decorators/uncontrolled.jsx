import React, { Component } from 'react'

export default ({defaultProp, prop, handlerName, handlerSelector, resetHandlerName}) => (Component) => React.createClass({
  displayName: Component.displayName || Component.name,

  componentDidMount () {
    this.setState({
      [prop]: this.props[prop] != null
        ? this.props[prop]
        : this.props[defaultProp]
    })
  },

  handleHandler (handler, e) {
    if (this.props[prop] == null) {
      this.setState({
        [prop]: handlerSelector
          ? handlerSelector(e)
          : e
      })
    }

    handler && handler(e)
  },

  handleReset (handler, e) {
    if (this.props[prop] == null) {
      this.setState({
        [prop]: undefined
      })
    }

    handler && handler(e)
  },

  render () {
    const props = {
      ...this.props,
      [handlerName]: this.handleHandler.bind(this, this.props[handlerName]),
      ...(resetHandlerName
        ? {
          [resetHandlerName]: this.handleReset.bind(this, this.props[resetHandlerName])
        }
        : {}
      )
    }

    return <Component
      {...this.state}
      {...props}
    />
  }
})
