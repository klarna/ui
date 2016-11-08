import compose from 'ramda/src/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulOptionFocus from '../../lib/decorators/statefulOptionFocus'
import Tab from '../../Menu/Tab'

const UncontrolledTab = compose(statefulOptionFocus, statefulValue)(Tab)

UncontrolledTab.displayName = 'UncontrolledMenu.Tab'

export default UncontrolledTab
