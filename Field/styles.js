import * as palette from '../settings/palette'
import grid from '../settings/grid'

export default {
  base: {
    wrapper: {
      borderColor: palette.GREY_LINES,
      borderStyle: 'solid',
      borderWidth: grid(0.2),
      borderRadius: grid(1),
      clear: 'both',
      display: 'block',
      height: grid(10.2),
      marginBottom: grid(-0.2),
      position: 'relative',
      textAlign: 'left',
      top: grid(-0.2),
      transition: 'border-color .2s ease, box-shadow .2s ease, background-color .2s ease'
    }
  },

  big: {
    wrapper: {
      height: grid(12.2)
    }
  },

  hidden: {
    wrapper: {
      display: 'none'
    }
  },

  focus: {
    borderColor: palette.KLARNA_BLUE_FOCUS,
    boxShadow: `0 0 ${grid(0.8)} ${palette.KLARNA_BLUE_SHADOW}`,
    outline: 'none',
    zIndex: 20
  },

  hover: {
    borderColor: palette.KLARNA_BLUE_HOVER,
    zIndex: 10
  }
}
