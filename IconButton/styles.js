import grid from '../settings/grid'
import typographize from '../settings/typographize'
import * as palette from '../settings/palette'
import * as fontFamilies from '../settings/fontFamilies'
import * as fontWeights from '../settings/fontWeights'

export default {
  base: {
    main: {
      cursor: 'pointer',
      display: 'inline-block',
      height: grid(4),
      overflow: 'visible',
      position: 'relative',
      width: grid(4)
    },
    wrapper: {
      borderWidth: grid(2),
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRadius: '100%',
      left: 0,
      margin: grid(-2),
      position: 'absolute',
      top: 0
    },
    illustration: {
      pointerEvents: 'none'
    },
    label: typographize({
      color: palette.KLARNA_BLUE,
      display: 'block',
      fontSize: grid(2.4),
      fontWeight: fontWeights.SEMI_BOLD,
      fontFamily: fontFamilies.BASE,
      left: grid(4),
      lineHeight: grid(4),
      position: 'absolute',
      textAlign: 'left',
      textTransform: 'uppercase',
      top: 0,
      transition: 'color 0.2s ease',
      userSelect: 'none',
      whiteSpace: 'nowrap'
    }),
    stroke: {
      stroke: palette.KLARNA_BLUE,
      fill: 'none',
      transition: 'stroke .2s ease'
    },
    fill: {
      fill: palette.KLARNA_BLUE,
      transition: 'fill .2s ease'
    },
    button: {
      backgroundColor: 'transparent'
    }
  },

  active: [
    ['base', palette.BLUE_ACTIVE_BACKGROUND],
    ['gray', palette.GREY_ACTIVE_BACKGROUND],
    ['inverse', palette.KLARNA_BLUE_HOVER]
  ].reduce((active, [state, color]) => ({
    ...active,
    [state]: {
      wrapper: {
        backgroundColor: color,
        borderColor: color
      }
    }
  }), {}),

  gray: {
    fill: {
      fill: palette.GREY_TEXT,
      transition: 'fill .2s ease'
    },
    stroke: {
      fill: 'none',
      transition: 'stroke .2s ease',
      stroke: palette.GREY_TEXT
    },
    label: {
      color: palette.GREY_TEXT
    }
  },

  light: {
    label: {
      fontWeight: fontWeights.REGULAR,
      textTransform: 'none'
    }
  },

  inverse: {
    fill: {
      fill: palette.WHITE
    },
    stroke: {
      fill: 'none',
      transition: 'stroke .2s ease',
      stroke: palette.WHITE
    },
    label: {
      color: palette.WHITE,
      transition: 'fill .2s ease'
    }
  },

  hover: [
    ['base', palette.KLARNA_BLUE_HOVER],
    ['gray', palette.BLACK],
    ['inverse', palette.WHITE]
  ].reduce((hover, [state, color]) => ({
    ...hover,
    [state]: {
      fill: {
        fill: color
      },
      stroke: {
        stroke: color
      },
      label: {
        color: color
      }
    }
  }), {}),

  left: {
    label: {
      left: 'auto',
      right: grid(4),
      textAlign: 'right'
    }
  },

  topRight: {
    main: {
      position: 'absolute',
      display: 'block',
      right: grid(4),
      top: grid(4)
    },
    label: {
      left: 'auto',
      right: grid(4),
      textAlign: 'right'
    }
  },

  topLeft: {
    main: {
      position: 'absolute',
      display: 'block',
      left: grid(4),
      top: grid(4)
    }
  },

  mobile: {
    topRight: {
      main: {
        right: grid(6),
        top: grid(6)
      }
    },

    topLeft: {
      main: {
        left: grid(6),
        top: grid(6)
      }
    }
  }
}
