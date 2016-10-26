import React, { Component } from 'react'

export default ({
  defaultProp,
  handlerName,
  handlerSelector,
  prop,
  resetHandlerName
}) => (Component) => React.createClass({
  displayName: Component.displayName || Component.name,

  componentDidMount () {
    this.setState({
      [prop]: this.props[prop] != null
        ? this.props[prop]
        : this.props[defaultProp]
    })
  },

  handleHandler (e) {
    if (this.props[prop] == null) {
      this.setState({
        [prop]: handlerSelector
          ? handlerSelector(e)
          : e
      })
    }

    this.props[handlerName] && this.props[handlerName](e)
  },

  handleReset (e) {
    if (this.props[prop] == null) {
      this.setState({
        [prop]: undefined
      })
    }

    this.props[resetHandlerName] && this.props[resetHandlerName](e)
  },

  render () {
    const props = {
      ...Object.keys(this.props)
        .filter((key) => key !== defaultProp)
        .reduce((copiedProps, propName) => {
          copiedProps[propName] = this.props[propName]
          return copiedProps
        }, {}),
      [handlerName]: this.handleHandler,
      ...(resetHandlerName ? { [resetHandlerName]: this.handleReset } : {})
    }

    return <Component
      {...this.state}
      {...props}
    />
  }
})
