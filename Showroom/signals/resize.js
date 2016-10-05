import { RESIZE } from '../actions'

export default (s) => {
  window.addEventListener('resize', (e) => s({
    type: RESIZE,
    payload: {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }))
}

export const reducer = (state, {height, width}) => ({
  ...state,
  height,
  width
})
