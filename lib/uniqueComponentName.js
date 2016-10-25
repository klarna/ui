import name from './name'
import uuid from './uuid'

let counter = 0
export default (Component) => `${name(Component)}-${uuid(counter++)}`
