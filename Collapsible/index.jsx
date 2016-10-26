import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'

export default class Collapsible extends Component {
  constructor () {
    super()

    this.state = {
      height: 0
    }
  }

  componentDidMount () {
    this.setState({
      height: getHeight(this.content)
    })

    window.addEventListener('resize', () => {
      const height = getHeight(this.content)

      if (this.state.height !== height) {
        this.setState({ height })
      }
    })
  }

  componentDidUpdate () {
    const height = getHeight(this.content)
    if (this.state.height !== height) {
      this.setState({ height })
    }
  }

  render () {
    const {children, collapsed} = this.props

    return <div ref={(div) => {this.content = div}}>
      <Motion style={{height: spring(collapsed ? 0 : this.state.height)}}>
        {({height}) => <div style={{height: height, overflow: 'hidden'}}>
          {children}
        </div>}
      </Motion>
    </div>
  }
}

const getHeight = (node) => node.children[0].children[0].getBoundingClientRect().height
