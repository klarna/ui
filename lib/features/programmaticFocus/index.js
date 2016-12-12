import { PropTypes } from 'react'
import values from '../../values'

export const FOCUS_TYPES = {
  FAKE: 'fake',
  REAL: 'real'
}

export const getClassName = function ({ focus }) {
  return focus && 'is-focused'
}

export const maybeFocus = function (document) {
  return function (type, input) {
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
}

export const propTypes = {
  focus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(values(FOCUS_TYPES))
  ])
}
