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
    fill: {
      fill: palette.KLARNA_BLUE,
      transition: 'fill .2s ease'
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
      transition: 'fill .2s ease'
    }
    button: {
      backgroundColor: 'transparent',
      transition: 'stroke .2s ease, fill .2s ease, color .2s ease'
    }
  },

  active: [
    ['base', palette.BLUE_ACTIVE_BACKGROUND],
    ['grey', palette.GREY_ACTIVE_BACKGROUND],
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

  grey: {
    fill: {
      fill: palette.GREY_TEXT
    },
    stroke: {
      stroke: palette.GREY_TEXT
    }
  },

  inverse: {
    fill: {
      fill: palette.WHITE
    },
    stroke: {
      stroke: palette.WHITE
    }
  },

  hover: [
    ['base', palette.KLARNA_BLUE_HOVER],
    ['grey', palette.BLACK],
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
    }), {})
  },

  left: {
    left: 'auto',
    right: grid(4),
    textAlign: 'right'
  }
}

.icon-button {
  .bg-wrapper { &:active { &.gray { } &.inverse { } } }
  .illustration { &.button { &.gray { } &.inverse { } } }

  &:hover {
    .illustration.button { &.gray { } &.inverse { } }
    .illustration__label { &.gray { } &.inverse { } }
  }
}

.illustration__label {
  &.left { }

  &.gray {
    color: map-get($colors, grey-text);
  }

  &.inverse {
    color: map-get($colors, white);
  }

  &--light {
    font-weight: map-get($font-weights, regular);
    text-transform: none;
  }
}
