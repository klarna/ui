import compose from 'ramda/src/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulOptionFocus from '../../lib/decorators/statefulOptionFocus'
import Segmented from '../../Menu/Segmented'

const UncontrolledSegmented = compose(statefulOptionFocus, statefulValue)(Segmented)

UncontrolledSegmented.displayName = 'UncontrolledMenu.Segmented'

export default UncontrolledSegmented
