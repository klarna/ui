import React, {Component} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'backdrop'

const classes = {
  smoke: `${baseClass}__smoke`
}

export default class Backdrop extends Component {
  constructor () {
    super()

    this.state = {
      top: undefined
    }
  }

  componentWillMount () {
    if (this.props.pinBody) {
      pinBody(this)
    }
  }

  componentWillUnmount () {
    unPinBody(this.state.top)
  }

  componentDidUpdate () {
    if (this.props.pinBody) {
      pinBody(this)
    }
  }

  render () {
    const {
      children,
      pinBody,
      styles,
      ...props
    } = this.props
    const classNames = classNamesBind.bind({...defaultStyles, ...styles})

    return <div
      className={classNames(baseClass)}
      style={pinBody ? {top: this.state.top} : undefined}
      {...props}>
      <div className={classNames(classes.smoke)}>
        {children}
      </div>
    </div>
  }
}

const pinBody = (component) => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  document.body.style.height = '100%'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollTop}px`
  document.body.style.width = '100%'

  if (component.state.top !== scrollTop) {
    component.setState({top: scrollTop})
  }
}

const unPinBody = (top) => {
  document.body.style.height = 'auto'
  document.body.style.position = 'static'
  document.body.style.top = '0'
  document.body.style.width = 'auto'
  document.body.scrollTop = top
}
