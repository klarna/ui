import {LIGHT_GREY} from '../../settings/palette'
import {MAIN_BODY_BIG} from '../../settings/fontSizes'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontWeights from '../../settings/fontWeights'
import grid from '../../settings/grid'

export default {
  base: {
    backgroundColor: LIGHT_GREY.base,
    cursor: 'pointer',
    display: 'block',
    height: grid(4),
    lineHeight: grid(4),
    paddingTop: grid(1.8),
    paddingBottom: grid(4),
    textAlign: 'center',
    fontSize: grid(MAIN_BODY_BIG.desktop),
    fontFamily: fontFamilies.BASE,
    fontWeight: fontWeights.SEMI_BOLD,
    transition: 'background-color .2s linear'
  },

  hover: {
    backgroundColor: LIGHT_GREY.hover
  }
}

export const chevron = {
  transform: `translateY(${grid(1)})`
}
