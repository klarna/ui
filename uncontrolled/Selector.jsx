import statefulValue from '../lib/decorators/statefulValue'
import Selector from '../Selector'

const UncontrolledSelector = statefulValue(Selector)

UncontrolledSelector.displayName = 'UncontrolledSelector'

export default UncontrolledSelector
