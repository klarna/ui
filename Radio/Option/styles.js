import grid from '../../settings/grid'
import typographize from '../../settings/typographize'
import * as palette from '../../settings/palette'
import {BORDER_RADIUS} from '../../settings/themes/default/assorted'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontSizes from '../../settings/fontSizes'
import * as fontWeights from '../../settings/fontWeights'

export default {
  base: {
    content: {
      paddingBottom: grid(4),
      paddingLeft: grid(4),
      paddingRight: grid(4)
    },
    aside: {
      display: 'table-cell',
      paddingLeft: grid(3),
      textAlign: 'right',
      verticalAlign: 'top'
    },
    input: {
      display: 'block',
      height: 0,
      opacity: 0,
      position: 'absolute',
      width: 0
    },
    main: {
      borderBottomWidth: grid(0.2),
      borderBottomStyle: 'solid',
      borderBottomColor: palette.GREY_SELECTOR_LINES,
      display: 'block',
      marginTop: grid(-0.2),
      overflow: 'hidden',
      position: 'relative',
      userSelect: 'none'
    },
    header: {
      cursor: 'pointer',
      display: 'table',
      paddingBottom: grid(3),
      paddingTop: grid(3),
      width: '100%'
    },
    inner: {
      display: 'table-row',
      width: '100%'
    },
    left: {
      display: 'table-cell',
      paddingRight: grid(3),
      paddingTop: grid(0.6),
      verticalAlign: 'top',
      width: grid(2.8)
    },
    leftmost: {
      paddingLeft: grid(4)
    },
    right: {
      display: 'table-cell',
      verticalAlign: 'top'
    },
    rightmost: {
      paddingRight: grid(4)
    },
    wrapper: {
      position: 'relative'
    },
    label: typographize({
      fontFamily: fontFamilies.BASE,
      fontSize: grid(fontSizes.MAIN_BODY_BIG.mobile),
      fontWeight: fontWeights.SEMI_BOLD,
      display: 'block',
      lineHeight: grid(4),
      paddingTop: 0,
      paddingBottom: 0
    }),
    description: typographize({
      fontFamily: fontFamilies.BASE,
      fontSize: grid(fontSizes.MAIN_BODY.mobile),
      fontWeight: fontWeights.REGULAR,
      lineHeight: grid(4),
      color: palette.GREY_TEXT,
      paddingTop: 0,
      paddingBottom: 1
    })
  },
  disabled: {
    aside: {
      opacity: palette.DISABLED_OPACITY
    },
    main: {
      backgroundColor: palette.DISABLED_BACKGROUND,
      pointerEvents: 'none'
    },
    label: {
      opacity: palette.DISABLED_OPACITY
    },
    description: {
      opacity: palette.DISABLED_OPACITY
    }
  },
  first: {
    main: {
      borderTopLeftRadius: grid(BORDER_RADIUS),
      borderTopRightRadius: grid(BORDER_RADIUS),
      marginTop: 0
    }
  },
  last: {
    main: {
      borderBottom: 'none',
      borderBottomLeftRadius: grid(BORDER_RADIUS),
      borderBottomRightRadius: grid(BORDER_RADIUS)
    }
  },
  borderless: {
    main: {
      borderBottom: 'none',
      borderRadius: grid(BORDER_RADIUS),
      marginTop: 0
    }
  },
  selected: {
    header: {
      cursor: 'auto'
    }
  },
  padded: {
    content: {
      paddingLeft: grid(9.8),
      paddingRight: grid(9.8)
    }
  }
}
