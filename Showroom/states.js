import { scan, stream } from 'flyd'
import { equals } from 'ramda'
import keyDown, { reducer as reduceKeyDown } from './signals/keyDown'
import keyPress, { reducer as reduceKeyPress } from './signals/keyPress'
import resize, { reducer as reduceResize } from './signals/resize'
import route, { reducer as reduceRoute } from './signals/route'

const signals = stream()

keyDown(signals)
keyPress(signals)
resize(signals)
route(signals)

const initialState = {
  route: [],
  grid: {
    display: false,
    height: window.innerHeight,
    offsets: {
      left: 0,
      top: 0
    },
    width: window.innerWidth
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESIZE':
      return {
        ...state,
        grid: reduceRoute(state.grid, action.payload)
      }

    case 'ROUTE':
      return reduceRoute(state, action.payload)

    case 'KEY_PRESS':
      const grid = reduceKeyPress(
        state.grid,
        action.payload
      )

      return equals(grid, state.grid)
        ? state
        : {
          ...state,
          grid
        }

    case 'KEY_DOWN':
      if (!state.grid.display) {
        return state
      }

      return {
        ...state,
        grid: {
          ...state.grid,
          offsets: reduceKeyDown(
            state.grid.offsets,
            action.payload
          )
        }
      }

    default:
      return state
  }
}

export default scan(reducer, initialState, signals)
