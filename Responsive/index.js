import React, {Component} from 'react'
import { getContextualizer } from 'react-context-props'

const Breakpoint = getContextualizer({
  layout: PropTypes.string
})

export default (theWindow = window) => class Responsive extends Component {
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

  render () {
    const {children, breakpoints} = this.props
    const {height, width} = this.state

    return <Breakpoint layout={getLayout(breakpoints)({height, width})}>
      {children}
    </Breakpoint>
  }
}

const getSize = theWindow => ({
  height: theWindow.innerHeight,
  width: theWindow.innerWidth
})

const getLayout = breakpoints => ({height, width}) =>
  breakpoints.find(
    breakpoint =>
      height < breakpoint.height &&
      width < breakpoint.width
  ).name
