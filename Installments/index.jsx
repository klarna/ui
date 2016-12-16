import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import Horizontal from './Horizontal'
import Vertical from './Vertical'
import defaultStyles from './styles.scss'
import {MOBILE_MAX_WIDTH} from '../settings'

const baseClass = 'installments'

const classNames = classNamesBind.bind(defaultStyles)

function Installments ({layout, ...props}) {
  switch (layout) {
    case 'horizontal':
      return <Horizontal {...props} />

    case 'vertical':
      return <Vertical {...props} />

    case 'auto':
    default:
      const wide = window.innerWidth > MOBILE_MAX_WIDTH

      return <div className={classNames(baseClass)}>
        {wide
          ? <Horizontal {...props} />
          : <Vertical {...props} />}
      </div>
  }
}

Installments.defaultProps = {
  layout: 'auto'
}

Installments.propTypes = {
  layout: PropTypes.oneOf(['auto', 'horizontal', 'vertical'])
}

export default Installments
