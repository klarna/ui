import React, {Component} from 'react'
import debounce from '../lib/debounce'
import defaultStyles from './styles.scss'

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
    // Clean the reference to the content element since we are unmounting.
    // We check if it is defined in updateHeight before doing any update.
    this.content = null
    window.removeEventListener('resize', this.debouncedResizeHandler)
  }

  componentDidUpdate () {
    this.updateHeight()
  }

  onResize () {
    this.updateHeight()
  }

  updateHeight () {
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
      <div
        className={defaultStyles.wrapper}
        style={{
          height: collapsed ? 0 : this.state.height,
          opacity: collapsed ? 0 : 1,
          overflow: collapsed ? 'hidden' : 'visible'
        }}>
        {children}
      </div>
    </div>
  }
}

const getHeight = (node) => node.children[0].children[0].getBoundingClientRect().height
