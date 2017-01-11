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
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.collapsed !== nextProps.collapsed) {
      this.setState({ height: calculateHeight(this.content) })
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
            // once it is fully expanded, we set the heigh to auto
            // and let the browser take care of the size
            height: height === this.state.height ? 'auto' : height,
            opacity,
            // Overflow rule to enable content to overflow outside the collapsible
            // once the animation is close to be complete (the last few pixels take a while
            // to be expanded). '10' is a magic number 🎩
            overflow: this.state.height - height > 10 ? 'hidden' : 'visible'
          }}>
          {children}
        </div>}
      </Motion>
    </div>
  }
}

const calculateHeight = (node) => {
  if (!node) { return 0 }

  const container = node.children[0]
  if (!container) { return 0 }

  const content = container.children[0]
  if (!content) { return 0 }

  return content.getBoundingClientRect().height
}
