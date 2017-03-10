import React, {Component, PropTypes} from 'react'
import { getContextualizer } from 'react-context-props'

export default (theWindow = window) => {
  class Responsive extends Component {
    constructor () {
      super()

      this.state = getSize(theWindow)

      this.listener = () => this.setState(getSize(theWindow))
    }

    componentDidMount () {
      window.addEventListener('resize', this.listener)
    }

    componentWillUnmount () {
      window.removeEventListener('resize', this.listener)
    }

    componentDidUpdate () {
      const {width, height} = this.state
      const {breakpoints, onLayout} = this.props
      const previousLayout = this.layout

      this.layout = breakpoints(width, height)
      onLayout && this.layout !== previousLayout && onLayout(this.layout)
    }

    render () {
      const {children, breakpoints} = this.props
      const {height, width} = this.state

      return <Breakpoint layout={breakpoints(width, height)}>
        {children}
      </Breakpoint>
    }
  }

  Responsive.propTypes = {
    breakpoints: PropTypes.func,
    onLayout: PropTypes.func,
    children: PropTypes.node
  }

  Responsive.defaultProps = {
    breakpoints: () => {}
  }

  return Responsive
}

const Breakpoint = getContextualizer({
  layout: PropTypes.string
})

const getSize = theWindow => ({
  height: theWindow.innerHeight,
  width: theWindow.innerWidth
})