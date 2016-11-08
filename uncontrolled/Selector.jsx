import compose from 'ramda/src/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulOptionFocus from '../lib/decorators/statefulOptionFocus'
import {Options} from '../Selector'

const UncontrolledSelector = compose(statefulOptionFocus, statefulValue)(Options)

UncontrolledSelector.displayName = 'UncontrolledSelector'

export default UncontrolledSelector
