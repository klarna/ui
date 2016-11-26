import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import debounce from '../lib/debounce'

export default class Collapsible extends Component {
  constructor () {
    super()

    this.state = {
      height: 0
    }
  }

  componentDidMount () {
    this.debouncedResizeHandler = debounce(() => this.onResize())
    window.addEventListener('resize', this.debouncedResizeHandler)

    this.updateHeight()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedResizeHandler)
  }

  componentDidUpdate () {
    this.updateHeight()
  }

  onResize () {
    this.updateHeight()
  }

  updateHeight () {
    const height = getHeight(this.content)

    if (this.state.height !== height) {
      this.setState({ height })
    }
  }

  render () {
    const {children, collapsed} = this.props

    return <div ref={(div) => { this.content = div }}>
      <Motion style={{
        height: spring(collapsed ? 0 : this.state.height),
        opacity: spring(collapsed ? 0 : 1)
      }}>
        {function ({height, opacity}) {
          return (<div
            style={{
              height,
              opacity,
              overflow: 'hidden'
            }}>
            {children}
          </div>)
        }}
      </Motion>
    </div>
  }
}

const getHeight = function (node) { return node.children[0].children[0].getBoundingClientRect().height }
