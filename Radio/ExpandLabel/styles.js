import {LIGHT_GREY, DISABLED_OPACITY} from '../../settings/palette'
import {MAIN_BODY_BIG} from '../../settings/fontSizes'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontWeights from '../../settings/fontWeights'
import grid from '../../settings/grid'

export default {
  base: {
    main: {
      backgroundColor: LIGHT_GREY.base,
      bottom: 0,
      cursor: 'pointer',
      display: 'block',
      lineHeight: grid(4),
      paddingTop: grid(1.8),
      paddingBottom: grid(3),
      position: 'absolute',
      textAlign: 'center',
      fontSize: grid(MAIN_BODY_BIG.desktop),
      fontFamily: fontFamilies.BASE,
      fontWeight: fontWeights.SEMI_BOLD,
      transition: 'background-color .2s linear',
      width: '100%',
      zIndex: 1
    },
    chevron: {
      transform: `translateY(${grid(1)})`
    }
  },

  active: {
    main: {
      backgroundColor: LIGHT_GREY.hover
    }
  },

  disabled: {
    main: {
      opacity: DISABLED_OPACITY,
      backgroundColor: LIGHT_GREY.base,
      cursor: 'auto',
      userSelect: 'none'
    }
  }
}
