import grid from '../settings/grid'
import * as palette from '../settings/palette'
import {BORDER_RADIUS} from '../settings/themes/default/assorted'

export default {
  base: {
    main: {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      borderWidth: grid(0.2),
      borderStyle: 'solid',
      borderColor: palette.GREY_LINES,
      borderRadius: grid(BORDER_RADIUS),
      boxSizing: 'border-box',
      display: 'block',
      marginBottom: grid(0.6),
      overflow: 'hidden',
      padding: 0,
      position: 'relative'
    }
  },
  borderless: {
    main: {
      border: 0,
      paddingBottom: grid(0.2),
      paddingTop: grid(0.2)
    }
  }
}
