import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import {
  withOverrideFromContext
} from '@klarna/higher-order-components'
import Horizontal from './Horizontal'
import Vertical from './Vertical'
import defaultStyles from './styles.scss'
import { isMobile } from '../lib/device'

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
        const wide = !isMobile()

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

BoxSelector.displayName = 'BoxSelector'

BoxSelector.defaultProps = {
  layout: 'auto'
}

BoxSelector.propTypes = {
  layout: PropTypes.oneOf(['auto', 'horizontal', 'vertical'])
}

export default withOverrideFromContext({ styles: defaultStyles })(BoxSelector)
