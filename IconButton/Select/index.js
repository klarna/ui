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

const Select = ({
  active,
  color,
  hover,
  id,
  label,
  largePadding,
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
      ...defaultStyles.base.main,
      ...(topRight
        ? (largePadding
          ? defaultStyles.largePadding.topRight.main
          : defaultStyles.topRight.main)
        : {}),
      ...(topLeft
        ? (largePadding
          ? defaultStyles.largePadding.topLeft.main
          : defaultStyles.topLeft.main)
        : {})
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
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 21 21'
        height='20px'
        width='20px'>
        <path
          d='M9,6l4,4l-4,4'
          style={{
            ...defaultStyles[colorMode].stroke,
            ...(hover ? defaultStyles.hover[colorMode].stroke : {})
          }}
        />
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

Select.defaultProps = {
  left: true
}

Select.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  hover: PropTypes.bool,
  id: PropTypes.string,
  largePadding: PropTypes.bool,
  left: PropTypes.bool,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  styles: PropTypes.object
}

export default compose(
  withDisplayName('Select'),
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withHoverProps({hover: true}),
  withMouseDownProps({active: true}),
  withTouchProps({active: true})
)(Select)
