import { stream } from 'flyd'
import { map } from 'ramda'

const UP_KEY = 38
const RIGHT_KEY = 39
const DOWN_KEY = 40
const LEFT_KEY = 37

const toAction = (e) => {
  switch (e.keyCode) {
    case UP_KEY:
      return {
        type: 'MOVE_GRID',
        payload: { left: 0, top: -1 }
      }

    case RIGHT_KEY:
      return {
        type: 'MOVE_GRID',
        payload: { left: 1, top: 0 }
      }

    case DOWN_KEY:
      return {
        type: 'MOVE_GRID',
        payload: { left: 0, top: 1 }
      }

    case LEFT_KEY:
      return {
        type: 'MOVE_GRID',
        payload: { left: -1, top: 0 }
      }

    default:
      return {}
  }
}

const arrows = stream()

window.addEventListener('keydown', arrows)

export default map(toAction, arrows)
