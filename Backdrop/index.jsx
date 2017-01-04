import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'backdrop'

const classes = {
  smoke: `${baseClass}__smoke`
}

export default class Backdrop extends Component {
  componentWillMount () {
    if (this.props.pinBody) {
      // TODO pin window
    }
  }

  componentDidUpdate () {
    if (this.props.pinBody) {
      // TODO pin if not pinned already
    }
  }

  render () {
    const {children, styles, ...props} = this.props
    const classNames = classNamesBind.bind({...defaultStyles, ...styles})

    return <div className={classNames(baseClass)} {...props}>
      <div className={classNames(classes.smoke)}>
        {children}
      </div>
    </div>
  }
}

const pinBody = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  width: 100%;
  height: 100%;
  position: fixed;

document.body.setAttribute('class', 'locked')
document.body.style.top = `-${scrollTop}px`

this.setState({
  top: scrollTop
})

  // TODO whatever Pierre did
}
