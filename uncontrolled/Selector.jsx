import compose from '../lib/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulOptionFocus from '../lib/decorators/statefulOptionFocus'
import Selector from '../Selector'

const UncontrolledSelector = compose(statefulOptionFocus, statefulValue)(Selector)

UncontrolledSelector.displayName = 'UncontrolledSelector'

export default UncontrolledSelector
