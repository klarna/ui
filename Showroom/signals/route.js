import router from 'zen-router'
import { split } from 'ramda'

export default (s) => router((route) =>
  s({
    type: 'ROUTE',
    payload: {
      route: split('/', route)
    }
  })
)

export const reducer = (state, {route}) => ({
  ...state,
  route
})
