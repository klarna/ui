import grid from '../settings/grid'
import * as palette from '../settings/palette'

export default {
  base: {
    main: {
      width: grid(3.2),
      height: grid(3.2)
    },
    borderCircle: {
      cx: grid(1.6),
      cy: grid(1.6),
      r: grid(1.6),
      fill: palette.GREY_LINES
    },
    backgroundCircle: {
      cx: grid(1.6),
      cy: grid(1.6),
      r: grid(1.6),
      fill: palette.KLARNA_BLUE
    },
    whiteCircle: {
      cx: grid(1.6),
      cy: grid(1.6),
      r: grid(0.4),
      fill: palette.WHITE
    },
    bulletCircle: {
      cx: grid(1.6),
      cy: grid(1.6),
      r: grid(0.4),
      fill: palette.WHITE
    },
    animation: {
      transform: scale => `matrix(${scale}, 0, 0, ${scale}, ${8 - scale * 8}, ${8 - scale * 8})`,
      scale: 3
    }
  },
  disabled: {
    backgroundCircle: {
      fill: palette.GREY_LINES
    }
  },
  checked: {
    animation: {
      scale: 1
    }
  }
}
