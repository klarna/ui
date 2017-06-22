import React from 'react'
import PropTypes from 'prop-types'
import deepMerge from 'deepmerge'
import * as palette from '../settings/palette'

const defaultStyles = {
  base: {
    main: {
      fill: 'none',
      fillRule: 'evenodd',
      height: '30px',
      stroke: 'none',
      viewBox: '0 0 30 30',
      width: '30px'
    },
    wrapper: {
      transform: 'translate(4 7)'
    },
    withFill: {
      fill: palette.GREY_ICON
    },
    withStroke: {
      stroke: palette.GREY_ICON
    },
    withRoundedStroke: {
      strokeLinecap: 'round'
    }
  }
}

export default function MediumCard ({styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <svg focusable='false' {...{...finalStyles.base.main, ...props}}>
    <g {...finalStyles.base.wrapper}>
      <path
        d='M1,2.99942248 L1,12.0005775 C1,13.1032466 1.8992504,14 3.00878799,14 L17.991212,14 C19.1022308,14 20,13.104719 20,12.0005775 L20,2.99942248 C20,1.89675343 19.1007496,1 17.991212,1 L3.00878799,1 C1.89776922,1 1,1.89528098 1,2.99942248 Z M0,2.99942248 C0,1.34288718 1.34559019,0 3.00878799,0 L17.991212,0 C19.6529197,0 21,1.34435073 21,2.99942248 L21,12.0005775 C21,13.6571128 19.6544098,15 17.991212,15 L3.00878799,15 C1.34708027,15 0,13.6556493 0,12.0005775 L0,2.99942248 Z'
        {...finalStyles.base.withFill}
      />
      <path
        d='M0,4.5 L20.5,4.5'
        {...finalStyles.base.withStroke}
      />
      <path
        d='M4.66666667,10.5 L11.5,10.5'
        strokeLinecap='round'
        {...{
          ...finalStyles.base.withStroke,
          ...finalStyles.base.withRoundedStroke
        }}
      />
    </g>
  </svg>
}

MediumCard.defaultProps = {
  styles: {}
}

MediumCard.propTypes = {
  styles: PropTypes.object
}
