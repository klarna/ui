import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import compose from 'ramda/src/compose'
import {themeable} from '@klarna/higher-order-components'

const grayLines = '#cbcbcd'
const klarnaBlue = '#0074c8'
const white = 'white'

function RadioMark ({ customize, checked, disabled, onClick, lowFPS }) {
  const backgroundColor = customize ? customize.backgroundColor : klarnaBlue
  const bulletColor = customize ? customize.bulletColor : white
  const scale = checked ? 1 : 3

  return (
    <svg width='14' height='14' onClick={onClick}>
      <Motion style={{ scale: lowFPS ? scale : spring(scale) }}>
        {({ scale }) => (
          <g>
            <circle cx='7' cy='7' r='7' fill={grayLines} />
            <circle cx='7' cy='7' r='7' fill={disabled ? grayLines : backgroundColor} style={{ opacity: 1 - (scale - 1) / 2 }} />
            {/* tranformOrigin using matrices: http://stackoverflow.com/questions/6711610/how-to-set-transform-origin-in-svg#6714140 */}
            <g transform={`matrix(${scale}, 0, 0, ${scale}, ${7 - scale * 7}, ${7 - scale * 7})`}>
              <circle
                cx='7'
                cy='7'
                fill={white}
                r='2'
              />
              <circle
                cx='7'
                cy='7'
                fill={bulletColor}
                opacity={1 - (scale - 1) / 2}
                r='2'
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
