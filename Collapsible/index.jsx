import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import debounce from '../lib/debounce'

export default class Collapsible extends Component {
  constructor () {
    super()

    this.state = {
      height: 0,
      shouldRenderChildren: false
    }
  }

  componentDidMount () {
    this.debouncedResizeHandler = debounce(() => this.onResize())
    window.addEventListener('resize', this.debouncedResizeHandler)

    this.updateHeight()
  }

  componentWillUnmount () {
    // Clean the reference to the content element since we are unmounting.
    // We check if it is defined in updateHeight before doing any update.
    this.content = null
    window.removeEventListener('resize', this.debouncedResizeHandler)
  }

  componentWillReceiveProps (nextProps) {
    // The collapsed content is only rendered if it is expanded at least once
    if (!nextProps.collapsed && !this.state.shouldRenderChildren) {
      this.setState({ shouldRenderChildren: true })
    }
  }

  componentDidUpdate () {
    this.updateHeight()
  }

  onResize () {
    this.updateHeight()
  }

  updateHeight () {
    // We don't need to update the height of collapsed
    // content (it will be zero)
    if (this.props.collapsed) { return }

    // Since update can happen asynchronously (debounced),
    // it might be executed after the component was already
    // unmounted.
    if (!this.content) { return }

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
        {({height, opacity}) => <div
          style={{
            height,
            opacity,
            // Overflow rule to enable content to overflow outside the collapsible
            // once the animation is close to be complete (the last few pixels take a while
            // to be expanded). '10' is a magic number 🎩
            overflow: this.state.height - height > 10 ? 'hidden' : 'visible'
          }}>
          {this.state.shouldRenderChildren && children}
        </div>}
      </Motion>
    </div>
  }
}

const getHeight = (node) => {
  const container = node.children[0]
  if (!container) { return 0 }

  const content = container.children[0]
  if (!content) { return 0 }

  return content.getBoundingClientRect().height
}
