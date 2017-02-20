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

const Options = ({
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
        height='20px'
        width='20px'>
        {[7, 13, 19].map((y) =>
          <circle
            key={y} cx='12' cy={y} r='2'
            style={{
              ...defaultStyles[colorMode].fill,
              ...(hover ? defaultStyles.hover[colorMode].fill : {})
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

Options.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  hover: PropTypes.bool,
  id: PropTypes.string,
  left: PropTypes.bool,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  withDisplayName('Options'),
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withHoverProps({hover: true}),
  withMouseDownProps({active: true}),
  withTouchProps({active: true})
)(Options)
