import grid from '../settings/grid'
import * as palette from '../settings/palette'

export default {
  base: {
    main: {
      width: grid(2.8),
      height: grid(2.8)
    },
    borderCircle: {
      cx: grid(1.4),
      cy: grid(1.4),
      r: grid(1.4),
      fill: palette.GREY_LINES
    },
    backgroundCircle: {
      cx: grid(1.4),
      cy: grid(1.4),
      r: grid(1.4),
      fill: palette.KLARNA_BLUE
    },
    whiteCircle: {
      cx: grid(1.4),
      cy: grid(1.4),
      r: grid(0.4),
      fill: palette.WHITE
    },
    bulletCircle: {
      cx: grid(1.4),
      cy: grid(1.4),
      r: grid(0.4),
      fill: palette.WHITE
    },
    animation: {
      transform: scale => `matrix(${scale}, 0, 0, ${scale}, ${7 - scale * 7}, ${7 - scale * 7})`,
      scale: 3
    }
  },
  disabled: {
    backgroundCircle: {
      fill: palette.GREY_LINES
    },
    main: {
      opacity: palette.DISABLED_OPACITY
    }
  },
  checked: {
    animation: {
      scale: 1
    }
  }
}
