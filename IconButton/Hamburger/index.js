import React, { PropTypes } from 'react'
import defaultStyles from '../styles'
import withDisplayName from '../withDisplayName'
import {
  withHoverProps,
  withMouseDownProps,
  withTouchProps,
  overridable,
  themeable
} from '@klarna/higher-order-components'

import compose from 'ramda/src/compose'

const Hamburger = ({
  active,
  color,
  hover,
  id,
  label,
  left,
  topLeft,
  topRight,
  styles,
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
      ...defaultStyles.base.main,
      ...(topRight ? defaultStyles.topRight.main : {}),
      ...(topLeft ? defaultStyles.topLeft.main : {})
    }}
    {...props}>
    <div
      id={ids.wrapper}
      style={{
        ...defaultStyles.base.wrapper,
        ...(active ? defaultStyles.active[colorMode].wrapper : {})
      }}>
      <svg
        id={ids.illustration}
        viewBox='0 0 25 25'
        strokeLinecap='round'
        strokeWidth='2'
        height='20px'
        width='20px'>
        {[8, 13, 18].map((y) =>
          <line
            key={y} x1='6' x2='19' y1={y} y2={y}
            style={{
              ...defaultStyles[colorMode].stroke,
              ...(hover ? defaultStyles.hover[colorMode].stroke : {})
            }}
          />
        )}
      </svg>

      <span
        id={ids.label}
        style={{
          ...defaultStyles.base.label,
          ...defaultStyles[colorMode].label,
          ...(hover ? defaultStyles.hover[colorMode].label : {}),
          ...(left ? defaultStyles.left.label : {}),
          ...(topRight ? defaultStyles.topRight.label : {})
        }}>
        {label}
      </span>
    </div>
  </div>
}

Hamburger.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  hover: PropTypes.bool,
  id: PropTypes.string,
  left: PropTypes.bool,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  withDisplayName('Hamburger'),
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withHoverProps({hover: true}),
  withMouseDownProps({active: true}),
  withTouchProps({active: true})
)(Hamburger)
