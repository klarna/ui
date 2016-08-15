import compose from '../../lib/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Segmented from '../../Menu/Segmented'

const UncontrolledSegmented = compose(statefulFocus, statefulValue)(Segmented)

UncontrolledSegmented.displayName = 'UncontrolledMenu.Segmented'

export default UncontrolledSegmented
