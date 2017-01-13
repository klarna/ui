import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import collectFPS from 'collect-fps'

export default class Collapsible extends Component {
  constructor (props) {
    super()

    this.state = {
      height: 0,
      animated: true
    }
  }

  componentDidMount () {
    if (!this.props.collapsed) {
      this.setState({ height: calculateHeight(this.content) })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.collapsed && this.props.collapsed) {
      this.setState({ height: calculateHeight(this.content) }, () => this.checkPerfomance())
    }
  }

  render () {
    const {children, collapsed} = this.props

    return <div ref={(div) => { this.content = div }}>
      {
        this.state.animated
          ? this.renderAnimation(children, collapsed)
          : this.renderRegular(children, collapsed)
      }
    </div>
  }

  /**
   * Disable animation on devices with poor performance
   */
  checkPerfomance () {
    if (this.state.animated) {
      collectFPS((error, fps) => {
        if (error || fps < 30) {
          this.setState({ animated: false })
        }
      })
    }
  }

  renderRegular (children, collapsed) {
    return (
      <div
        style={{
          display: collapsed ? 'none' : 'block'
        }}>
        {children}
      </div>
    )
  }

  renderAnimation (children, collapsed) {
    return (
      <Motion style={{
        height: spring(collapsed ? 0 : this.state.height),
        opacity: spring(collapsed ? 0 : 1)
      }}>
        {({height, opacity}) => <div
          style={{
            // once it is fully expanded, we set the heigh to auto
            // and let the browser take care of the size
            height: getHeight(collapsed, height, this.state.height),
            opacity,
            // Overflow rule to enable content to overflow outside the collapsible
            // once the animation is close to be complete (the last few pixels take a while
            // to be expanded). '10' is a magic number 🎩
            overflow: this.state.height - height > 10 ? 'hidden' : 'visible'
          }}>
          {children}
        </div>}
      </Motion>
    )
  }
}

const getHeight = (collapsed, animatedHeight, actualHeight) => {
  if (collapsed) { return animatedHeight }
  return animatedHeight === actualHeight ? 'auto' : animatedHeight
}

const calculateHeight = (node) => {
  if (!node) { return 0 }

  const container = node.children[0]
  if (!container) { return 0 }

  const content = container.children[0]
  if (!content) { return 0 }

  return content.getBoundingClientRect().height
}

