import { PropTypes } from 'react'

const noop = () => {}

const KEYS = {
  ENTER: 13,
  TAB: 9
}

export const handleKeyDown = ({ onTab, onEnter }) => (e) => {
  switch (e.keyCode) {
    case KEYS.TAB: {
      const direction = e.shiftKey ? -1 : 1
      return onTab(direction, e)
    }
    case KEYS.ENTER: {
      return onEnter(e)
    }
  }
}

handleKeyDown.defaultProps = {
  onTab: noop,
  onEnter: noop
}

handleKeyDown.propTypes = {
  onTab: PropTypes.func,
  onEnter: PropTypes.func
}
