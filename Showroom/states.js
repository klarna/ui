import { merge, scan } from 'flyd'
import gridToggles from './streams/gridToggles'
import routeUpdates from './streams/routeUpdates'

const initialState = { route: '', grid: false }

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
        grid: !state.grid
      }

    default:
      return state
  }
}

export default scan(reducer, initialState, merge(routeUpdates, gridToggles))
