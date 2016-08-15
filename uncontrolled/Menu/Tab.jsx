import compose from '../../lib/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Tab from '../../Menu/Tab'

const UncontrolledTab = compose(statefulFocus, statefulValue)(Tab)

UncontrolledTab.displayName = 'UncontrolledMenu.Tab'

export default UncontrolledTab
