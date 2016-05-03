import compose from '../../lib/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Input from '../Input'

export default compose(statefulFocus, statefulValue)(Input)
