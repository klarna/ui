import compose from 'ramda/src/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulFocus from '../lib/decorators/statefulFocus'
import Dropdown from '../Dropdown'

const UncontrolledDropdown = compose(statefulFocus, statefulValue)(Dropdown)

UncontrolledDropdown.displayName = 'UncontrolledDropdown'

export default UncontrolledDropdown
