export default (s) => {
  window.addEventListener(
    'keypress',
    (e) => s({
      type: 'KEY_PRESS',
      payload: {
        code: e.keyCode
      }
    })
  )
}

const G_KEY = 103

export const reducer = (state, {code}) => {
  switch (code) {
    case G_KEY:
      return {
        ...state,
        display: !state.display
      }

    default:
      return state
  }
}
