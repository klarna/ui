import React from 'react'
import compose from 'ramda/src/compose'
import {
  withHoverProps,
  withTouchProps
} from '@klarna/higher-order-components'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'
import typographize from '../../settings/typographize'
import * as palette from '../../settings/palette'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontSizes from '../../settings/fontSizes'
import * as fontWeights from '../../settings/fontWeights'

const defaultStyles = {
  main: {
    base: {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      borderBottom: 0,
      borderTopColor: palette.GREY_LINES,
      borderTopStyle: 'solid',
      borderTopWidth: grid(0.2),
      borderLeftColor: palette.GREY_LINES,
      borderLeftStyle: 'solid',
      borderLeftWidth: grid(0.2),
      borderRightColor: palette.GREY_LINES,
      borderRightStyle: 'solid',
      borderRightWidth: grid(0.2),
      boxSizing: 'border-box',
      color: palette.BLACK,
      cursor: 'pointer',
      display: 'block',
      paddingLeft: grid(0.4),
      paddingRight: grid(0.4),
      position: 'relative',
      transition: 'border-color .4s ease'
    },
    first: {
      borderTopLeftRadius: grid(1),
      borderTopRightRadius: grid(1)
    },
    last: {
      borderBottomColor: palette.GREY_LINES,
      borderBottomStyle: 'solid',
      borderBottomWidth: grid(0.2),
      borderBottomLeftRadius: grid(1),
      borderBottomRightRadius: grid(1)
    },
    focused: {},
    selected: {
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent'
    },
    hovered: {
      color: palette.KLARNA_BLUE
    },
    afterSelected: {
      borderTopColor: 'transparent'
    },
    previouslySelected: {
      transition: 'border 0ms'
    },
    afterPreviouslySelected: {
      transition: 'border 0ms'
    }
  },
  input: {
    base: {
      display: 'block',
      height: 0,
      opacity: 0,
      position: 'absolute',
      width: 0
    }
  },
  content: {
    base: {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      cursor: 'pointer',
      display: 'block',
      paddingBottom: grid(2.4),
      paddingLeft: grid(4),
      paddingRight: grid(4),
      paddingTop: grid(2.4),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY_BIG.mobile),
        fontWeight: fontWeights.SEMI_BOLD,
        lineHeight: grid(5)
      })
    }
  },
  highlight: {
    base: {
      borderWidth: grid(0.4),
      borderStyle: 'solid',
      borderColor: palette.KLARNA_BLUE,
      borderRadius: grid(1),
      bottom: grid(-0.2),
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'block',
      left: grid(-0.2),
      opacity: 0,
      pointerEvents: 'none',
      position: 'absolute',
      right: grid(-0.2),
      top: grid(-0.2),
      transition: 'opacity .4s ease',
      zIndex: 5
    },
    selected: {
      opacity: 1
    }
  }
}

function Option ({
  afterPreviouslySelected,
  afterSelected,
  content,
  first,
  id,
  hovered,
  last,
  name,
  onChange,
  previouslySelected,
  selected,
  styles,
  value,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  const ids = {
    label: `${id}__label`,
    content: `${id}__content`
  }

  return <label
    id={ids.label}
    style={{
      ...finalStyles.main.base,
      ...(first ? finalStyles.main.first : {}),
      ...(last ? finalStyles.main.last : {}),
      ...(hovered ? finalStyles.main.hovered : {}),
      ...(selected ? finalStyles.main.selected : {}),
      ...(afterSelected ? finalStyles.main.afterSelected : {}),
      ...(previouslySelected ? finalStyles.main.previouslySelected : {}),
      ...(afterPreviouslySelected ? finalStyles.main.afterPreviouslySelected : {})
    }}
    {...props}>
    <input
      id={id}
      checked={selected}
      onChange={() => onChange && onChange(value)}
      name={name}
      type='radio'
      style={finalStyles.input.base}
      value={value}
    />
    <div id={ids.content} style={finalStyles.content.base}>
      {content}
    </div>
    <span
      style={{
        ...finalStyles.highlight.base,
        ...(selected ? finalStyles.highlight.selected : {})
      }}
    />
  </label>
}

Option.defaultProps = {
  styles: {}
}

export default compose(
  withHoverProps({
    hovered: true
  }),
  withTouchProps({
    hovered: true
  })
)(Option)
