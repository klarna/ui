import router from 'zen-router'
import { split } from 'ramda'
import { ROUTE } from '../actions'

export default (s) => router((route) =>
  s({
    type: ROUTE,
    payload: {
      route: split('/', route)
    }
  })
)

export const reducer = (state, {route}) => ({
  ...state,
  route
})
