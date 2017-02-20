import React, { PropTypes } from 'react'
import defaultStylesJS from '../styles'
import withDisplayName from '../withDisplayName'
import {
  withHoverProps,
  withMouseDownProps,
  withTouchProps,
  overridable,
  themeable
} from '@klarna/higher-order-components'

import compose from 'ramda/src/compose'

const Back = ({
  active,
  color,
  id,
  label,
  left,
  hover,
  styles,
  topLeft,
  topRight,
  ...props
}) => {
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`,
      wrapper: `${id}__wrapper`
    } : {}

  const colorMode = color == null ? 'base' : color

  return <div
    id={id}
    style={{
      // TODO: Use `mobile` variation as well (styles.js:156)
      ...defaultStylesJS.base.main,
      ...(topRight ? defaultStylesJS.topRight.main : {}),
      ...(topLeft ? defaultStylesJS.topLeft.main : {}),
    }}
    {...props}>
    <div
      id={ids.wrapper}
      style={{
        ...defaultStylesJS.base.wrapper,
        ...(active ? defaultStylesJS.active[colorMode].wrapper : {})
      }}>
      <svg
        id={ids.illustration}
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 25 25'
        height='20px'
        width='20px'>
        <path
          d='M15,6l-6.5,6.5l6.5,6.5'
          style={{
            ...defaultStylesJS[colorMode].stroke,
            ...(hover ? defaultStylesJS.hover[colorMode].stroke : {})
          }}
        />
      </svg>
      <span
        id={ids.label}
        style={{
          ...defaultStylesJS.base.label,
          ...(left ? defaultStylesJS.left.label : {}),
          ...defaultStylesJS[colorMode].label,
          ...(hover ? defaultStylesJS.hover[colorMode].label : {})
        }}>
        {label}
      </span>
    </div>
  </div>
}

Back.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  hover: PropTypes.bool,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({color: 'gray'})),
  overridable(defaultStylesJS),
  withHoverProps({hover: true}),
  withMouseDownProps({active: true}),
  withTouchProps({active: true}),
  withDisplayName('Back')
)(Back)
