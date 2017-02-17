import React, {Component, PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import Horizontal from './Horizontal'
import Vertical from './Vertical'
import defaultStyles from './styles.scss'
import {MOBILE_MAX_WIDTH} from '../settings'

const baseClass = 'box-selector'

const classNames = classNamesBind.bind(defaultStyles)

class BoxSelector extends Component {
  componentDidMount () {
    this.wrapper && this.wrapper.addEventListener('animationstart', (e) => {
      switch (e.animationName) {
        case defaultStyles.onLayoutChangeToNarrow:
        case defaultStyles.onLayoutChangeToWide:
          this.forceUpdate()
          return
      }
    })
  }

  render () {
    const {layout, ...props} = this.props

    switch (layout) {
      case 'horizontal':
        return <Horizontal {...props} />

      case 'vertical':
        return <Vertical {...props} />

      case 'auto':
      default:
        const currentWidth = window.innerWidth || document.body.clientWidth
        const wide = currentWidth >= MOBILE_MAX_WIDTH

        return <div
          className={classNames(baseClass)}
          ref={(wrapper) => { this.wrapper = wrapper }}>
          {wide
            ? <Horizontal {...props} />
            : <Vertical {...props} />}
        </div>
    }
  }
}

BoxSelector.defaultProps = {
  layout: 'auto'
}

BoxSelector.propTypes = {
  layout: PropTypes.oneOf(['auto', 'horizontal', 'vertical'])
}

export default BoxSelector
