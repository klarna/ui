import compose from 'ramda/src/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Checkbox from '../../Switch/Checkbox'

const UncontrolledCheckbox = compose(statefulFocus, statefulValue)(Checkbox)

UncontrolledCheckbox.displayName = 'UncontrolledSwitch.Checkbox'

export default UncontrolledCheckbox
