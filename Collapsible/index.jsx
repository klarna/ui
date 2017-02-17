import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'

export default class Collapsible extends Component {
  constructor (props) {
    super()

    this.state = {
      height: 0
    }
  }

  componentDidMount () {
    if (!this.props.collapsed) {
      this.setState({ height: calculateHeight(this.content) })
      this.props.onStartFPSCollection()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.collapsed && this.props.collapsed) {
      this.setState({ height: calculateHeight(this.content) })
      this.props.onStartFPSCollection()
    } else if (nextProps.collapsed && !this.props.collapsed) {
      this.props.onStartFPSCollection()
    }
  }

  render () {
    const {children, collapsed, onEndFPSCollection} = this.props

    return <div ref={(div) => { this.content = div }}>
      {
        this.props.lowFPS
          ? this.renderRegular(children, collapsed)
          : this.renderAnimation(children, collapsed, onEndFPSCollection)
      }
    </div>
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

  renderAnimation (children, collapsed, onEndFPSCollection) {
    return (
      <Motion
        style={{
          height: spring(collapsed ? 0 : this.state.height),
          opacity: spring(collapsed ? 0 : 1)
        }}
        onRest={onEndFPSCollection}>
        {({height, opacity}) => <div
          style={{
            height: getHeight(collapsed, height, this.state.height),
            opacity,
            overflow: shouldOverflow(collapsed, height, this.state.height)
          }}>
          {children}
        </div>}
      </Motion>
    )
  }
}

/**
 * Overflow rule to enable content to overflow outside the collapsible
 * once the animation is close to be complete (the last few pixels take a while
 * to be expanded). '10' is a magic number 🎩
 */
const shouldOverflow = (collapsed, animatedHeight, actualHeight) => {
  const notYetAlmostExpanded = actualHeight - animatedHeight > 10
  return (collapsed || notYetAlmostExpanded) ? 'hidden' : 'visible'
}

/**
 * Once it is fully expanded, we set the heigh to auto
 * and let the browser take care of the size
 */
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
