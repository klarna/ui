import React from 'react'
import grid from '../../../settings/grid'
import * as palette from '../../../settings/palette'

const defaultStyles = {
  base: {
    main: {
      alignItems: 'center',
      backgroundColor: palette.LIGHT_GREY.base,
      boxSizing: 'border-box',
      borderWidth: grid(0.2),
      borderStyle: 'solid',
      borderColor: palette.GREY_LINES,
      display: 'flex',
      height: grid(140),
      justifyContent: 'center',
      width: '100%'
    },

    artboard: {
      boxShadow: `${palette.GREY_LINES} 0 0 ${grid(1)}`,
      overflow: 'scroll',
      position: 'relative',
      height: '100%',
      width: '100%'
    }
  }
}

export default function Canvas ({children, dimensions, ...props}) {
  return <div style={defaultStyles.base.main} {...props}>
    <div
      style={{
        ...defaultStyles.base.artboard,
        ...(dimensions ? {
          height: dimensions[1],
          width: dimensions[0]
        }: {})
      }}>
      {children}
    </div>
  </div>
}
