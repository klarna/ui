import { stream } from 'flyd'
import { map } from 'ramda'

const toAction = (e) => e.keyCode === 103
 ? { type: 'TOGGLE_GRID' }
 : {}

const keyPresses = stream()

window.addEventListener('keypress', keyPresses)

export default map(toAction, keyPresses)
