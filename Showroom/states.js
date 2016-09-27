import { merge, scan } from 'flyd'
import arrows from './streams/arrows'
import gridToggles from './streams/gridToggles'
import routeUpdates from './streams/routeUpdates'

const initialState = {
  route: [],
  grid: {
    display: false,
    offsets: {
      left: 0,
      top: 0
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ROUTE':
      return {
        ...state,
        route: action.payload
      }

    case 'TOGGLE_GRID':
      return {
        ...state,
        grid: {
          ...state.grid,
          display: !state.grid.display
        }
      }

    case 'MOVE_GRID':
      return {
        ...state,
        grid: {
          ...state.grid,
          offsets: {
            left: state.grid.offsets.left + action.payload.left,
            top: state.grid.offsets.top + action.payload.top
          }
        }
      }

    default:
      return state
  }
}

export default scan(reducer, initialState,
  merge(routeUpdates, merge(arrows, gridToggles))
)
