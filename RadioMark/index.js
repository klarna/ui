import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import compose from 'ramda/src/compose'
import {themeable} from '@klarna/higher-order-components'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

function RadioMark ({
  customize,
  checked,
  disabled,
  onClick,
  lowFPS,
  styles,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles, styles)
  const scale = checked
    ? finalStyles.checked.animation.scale
    : finalStyles.base.animation.scale

  return (
    <svg
      focusable='false'
      width={finalStyles.base.main.width}
      height={finalStyles.base.main.height}
      onClick={onClick}
      style={
        disabled && customize
          ? finalStyles.disabled.main
          : {}
      }
      {...props}>
      <Motion
        style={{
          scale: lowFPS
            ? scale
            : spring(scale)
        }}>
        {({ scale }) => (
          <g>
            <circle {...finalStyles.base.borderCircle} />
            <circle
              {...finalStyles.base.backgroundCircle}
              {...(customize ? {fill: customize.backgroundColor} : {})}
              {...(disabled && customize == null ? finalStyles.disabled.backgroundCircle : {})}
              style={{ opacity: 1 - (scale - 1) / 2 }}
            />
            {/* tranformOrigin using matrices: http://stackoverflow.com/questions/6711610/how-to-set-transform-origin-in-svg#6714140 */}
            <g transform={finalStyles.base.animation.transform(scale)}>
              <circle {...finalStyles.base.whiteCircle} />
              <circle
                {...finalStyles.base.bulletCircle}
                {...(customize ? {fill: customize.bulletColor} : {})}
                opacity={1 - (scale - 1) / 2}
              />
            </g>
          </g>
        )}
      </Motion>
    </svg>
  )
}

RadioMark.propTypes = {
  checked: PropTypes.bool,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    bulletColor: PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool,
  lowFPS: PropTypes.bool,
  onClick: PropTypes.func,
  styles: PropTypes.shape({
    base: PropTypes.object,
    disabled: PropTypes.object,
    checked: PropTypes.object
  })
}

RadioMark.defaultProps = {
  styles: {
    base: {},
    disabled: {},
    checked: {}
  }
}

export default compose(
  themeable((customizations, {customize}) => ({
    customize: {
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      ...customize
    }
  }))
)(RadioMark)
