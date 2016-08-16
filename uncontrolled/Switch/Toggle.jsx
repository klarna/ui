import compose from '../../lib/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Toggle from '../../Switch/Toggle'

const UncontrolledToggle = compose(statefulFocus, statefulValue)(Toggle)

UncontrolledToggle.displayName = 'UncontrolledSwitch.Toggle'

export default UncontrolledToggle
