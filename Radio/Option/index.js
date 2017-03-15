import React from 'react'
import {Motion, spring} from 'react-motion'
import deepMerge from 'deepmerge'
import * as Title from '../../Title'
import * as Paragraph from '../../Paragraph'
import Shadow from '../Shadow'
import RadioMark from '../../RadioMark'

import grid from '../../settings/grid'
import rgba from '../../settings/rgba'
import * as palette from '../../settings/palette'

export const OPTION_HEIGHT = 16 * 5
export const OPTION_CONTENT_PADDING = grid(4)

const defaultStyleSheet = {
  base: {
    main: {
      backgroundColor: palette.WHITE,
      cursor: 'pointer',
      paddingBottom: grid(4),
      paddingTop: grid(4),
      position: 'relative',
      width: '100%',
      WebkitTapHighlightColor: rgba(0)(0)(0)(0)
    },
    content: {
      paddingTop: OPTION_CONTENT_PADDING
    },
    header: {
      display: 'block',
      position: 'relative',
      paddingLeft: grid(7)
    },
    radioMarkWrapper: {
      position: 'absolute',
      left: 0,
      top: 'calc(50% - 8px)'
    },
    input: {
      display: 'block',
      height: 0,
      opacity: 0,
      position: 'absolute',
      width: 0
    },
    innerShadowContainer: {
      top: 0,
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      width: '100%',
      height: '100%'
    },
    outerShadowContainer: {
      top: grid(-4),
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      width: '100%',
      height: '100%'
    }
  },
  notFirst: {
    topLine: {
      opacity: 1
    }
  },
  radioMarkRight: {
    header: {
      paddingLeft: undefined
    },
    radioMarkWrapper: {
      left: undefined,
      right: 0
    }
  },
  padded: {
    content: {
      paddingLeft: grid(7),
      paddingRight: grid(7)
    }
  }
}

export default function Option ({
  children,
  customize,
  description,
  id,
  index,
  label,
  lowFPS,
  name,
  onChange,
  padded,
  previousOptionHeight,
  previousSelected,
  radioMarkRight,
  selected,
  styleSheet,
  ...props
}) {
  const finalStyleSheet = deepMerge(defaultStyleSheet, styleSheet)

  return <div
    style={{
      ...finalStyleSheet.base.main,
      zIndex: index
    }}
    {...props}>
    <input
      style={finalStyleSheet.base.input}
      id={`${name}-${id}`}
      name={name}
      type='radio'
      checked={selected}
      onChange={() => onChange && !selected && onChange()}
    />
    <div style={finalStyleSheet.base.outerShadowContainer}>
      <Shadow
        show={selected}
        withLine={index > 0 && !previousSelected && !selected}
      />
    </div>
    <div style={finalStyleSheet.base.innerShadowContainer}>
      <Shadow reversed show={previousSelected} />
    </div>

    <label
      htmlFor={`${name}-${id}`}
      style={{
        ...finalStyleSheet.base.header,
        ...(radioMarkRight ? finalStyleSheet.radioMarkRight.header : {})
      }}>
      <div
        style={{
          ...finalStyleSheet.base.radioMarkWrapper,
          ...(radioMarkRight
            ? finalStyleSheet.radioMarkRight.radioMarkWrapper
            : {}
          )
        }}>
        <RadioMark
          checked={selected}
          customize={customize}
          lowFPS={lowFPS} />
      </div>
      <Title.Secondary style={{color: customize ? customize.textPrimaryColor : undefined}}>
        {label}
      </Title.Secondary>
      <Paragraph.Secondary
        condensed
        style={{
          color: customize ? customize.textSecondaryColor : undefined,
          paddingBottom: 0
        }}>
        {description}
      </Paragraph.Secondary>
    </label>

    {children && <Motion
      style={{opacity: lowFPS ? 1 : spring(selected ? 1 : 0)}}>
      {({opacity}) => <div
        style={{
          ...finalStyleSheet.base.content,
          ...(padded ? finalStyleSheet.padded.content : {}),
          opacity
        }}>
        {children}
      </div>}
    </Motion>}
  </div>
}
