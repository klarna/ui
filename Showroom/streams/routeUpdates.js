import router from 'zen-router'
import { stream } from 'flyd'
import { map, split } from 'ramda'

const toAction = (route) => ({
  type: 'UPDATE_ROUTE',
  payload: split('/', route)
})

const routes = stream()

router(routes)

export default map(toAction, routes)
