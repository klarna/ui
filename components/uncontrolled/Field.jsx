import compose from '../../lib/compose'
import statefulValue from '../../lib/decorators/statefulValue'
import statefulFocus from '../../lib/decorators/statefulFocus'
import Field from '../Field'

export default compose(statefulFocus, statefulValue)(Field)
