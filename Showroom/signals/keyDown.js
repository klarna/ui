export default (s) => {
  window.addEventListener(
    'keydown',
    (e) => s({
      type: 'KEY_DOWN',
      payload: {
        code: e.keyCode
      }
    })
  )
}

const UP_KEY = 38
const RIGHT_KEY = 39
const DOWN_KEY = 40
const LEFT_KEY = 37

export const reducer = (state, {code}) => {
  switch (code) {
    case UP_KEY:
      return {
        ...state,
        top: state.top - 1
      }

    case RIGHT_KEY:
      return {
        ...state,
        left: state.top + 1
      }

    case DOWN_KEY:
      return {
        ...state,
        top: state.top + 1
      }

    case LEFT_KEY:
      return {
        ...state,
        left: state.top - 1
      }

    default:
      return state
  }
}
