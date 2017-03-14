import React from 'react'
import {spring, StaggeredMotion} from 'react-motion'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'
import rgba from '../../settings/rgba'
import * as palette from '../../settings/palette'

const shadowColor = rgba(0x9C)(0xAA)(0xBB)

const defaultStyles = {
  base: {
    main: {
      height: grid(4),
      overflow: 'hidden',
      position: 'relative'
    },
    thinShadow: {
      borderRadius: 10,
      top: 'calc(100% + 5px)',
      boxShadow: `${shadowColor(0.35)} 0px 0px 20px`,
      height: 40,
      left: 0,
      position: 'absolute',
      width: 'calc(100% - 0px)'
    },
    thickerShadow: {
      borderRadius: 10,
      boxShadow: `${shadowColor(0.3)} 0 0px 40px`,
      height: 40,
      left: 40,
      position: 'absolute',
      top: 'calc(100% + 10px)',
      width: 'calc(100% - 80px)'
    },
    borderLine: {
      backgroundColor: rgba(0xE5)(0xE5)(0xE6)(1),
      height: 1,
      position: 'absolute',
      opacity: 0,
      bottom: 0,
      width: '100%'
    }
  },

  reversed: {
    thinShadow: {
      bottom: 'calc(100% + 5px)',
      top: undefined
    },
    thickerShadow: {
      bottom: 'calc(100% + 10px)',
      top: undefined
    },
    borderLine: {
      bottom: undefined,
      top: 0
    }
  }
}

export default function Shadow ({
  reversed,
  show,
  styles,
  withLine,
  ...props
}) {
  const finalStyles = styles == null
    ? defaultStyles
    : deepMerge(defaultStyles, styles)

  return <StaggeredMotion
    defaultStyles={[{top: 10}, {top: 5}, {opacity: 0}]}
    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
      switch (i) {
        case 0:
          return {
            top: spring(
              !show
                ? 30
                : 0
            )
          }

        case 1:
          return {
            top: spring(
              prevInterpolatedStyles[0].top > 10
                ? 5
                : 0
            )
          }

        case 2:
          return {
            opacity: spring(
              prevInterpolatedStyles[0].top > 10 && withLine
                ? 1
                : 0
            )
          }
      }
    })}>
    {interpolatingStyles => {
      const thickerShadowTranslation = reversed
        ? -interpolatingStyles[0].top
        : interpolatingStyles[0].top

      const thinShadowTranslation = reversed
        ? -interpolatingStyles[1].top
        : interpolatingStyles[1].top

      const borderLineOpacity = interpolatingStyles[2].opacity

      return <div
        style={finalStyles.base.main}
        {...props}>
        <div
          style={{
            ...finalStyles.base.thickerShadow,
            ...(reversed ? finalStyles.reversed.thickerShadow : {}),
            transform: `translateY(${thickerShadowTranslation}px)`
          }}
        />
        <div
          style={{
            ...finalStyles.base.thinShadow,
            ...(reversed ? finalStyles.reversed.thinShadow : {}),
            transform: `translateY(${thinShadowTranslation}px)`
          }}
        />
        <div
          style={{
            ...finalStyles.base.borderLine,
            ...(reversed ? finalStyles.reversed.borderLine : {}),
            opacity: borderLineOpacity
          }}
        />
      </div>
    }}
  </StaggeredMotion>
}
