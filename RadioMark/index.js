import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import compose from 'ramda/src/compose'
import {themeable} from '@klarna/higher-order-components'
import defaultStyles from './styles'

function RadioMark ({ customize, checked, disabled, onClick, lowFPS }) {
  const scale = checked
    ? defaultStyles.checked.animation.scale
    : defaultStyles.base.animation.scale

  return (
    <svg
      width={defaultStyles.base.main.width}
      height={defaultStyles.base.main.height}
      onClick={onClick}>
      <Motion
        style={{
          scale: lowFPS
            ? scale
            : spring(scale)
        }}>
        {({ scale }) => (
          <g>
            <circle {...defaultStyles.base.borderCircle} />
            <circle
              {...defaultStyles.base.backgroundCircle}
              {...(customize ? {fill: customize.backgroundColor} : {})}
              {...(disabled ? defaultStyles.disabled.backgroundCircle : {})}
              style={{ opacity: 1 - (scale - 1) / 2 }}
            />
            {/* tranformOrigin using matrices: http://stackoverflow.com/questions/6711610/how-to-set-transform-origin-in-svg#6714140 */}
            <g transform={defaultStyles.base.animation.transform(scale)}>
              <circle {...defaultStyles.base.whiteCircle} />
              <circle
                {...defaultStyles.base.bulletCircle}
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
  onClick: PropTypes.func
}

export default compose(
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark
    }
  }))
)(RadioMark)
