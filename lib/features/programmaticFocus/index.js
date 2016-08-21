import { PropTypes } from 'react'
import values from '../../values'

export const FOCUS_TYPES = {
  FAKE: 'fake',
  REAL: 'real'
}

export const getClassName = ({ focus }) => focus && 'is-focused'

export const maybeFocus = (document) => (type, input) => {
  switch (type) {
    case FOCUS_TYPES.REAL:
      if (document.activeElement !== input) {
        input.focus()
      }
      break
    case FOCUS_TYPES.FAKE:
      if (typeof input.scrollIntoViewIfNeeded === 'function') {
        input.scrollIntoViewIfNeeded()
      }
      break
  }
}

export const propTypes = {
  focus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(values(FOCUS_TYPES))
  ])
}
