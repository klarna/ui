import compose from '../lib/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulFocus from '../lib/decorators/statefulFocus'
import name from '../lib/decorators/name'
import Field from '../Field'

const UncontrolledField = compose(statefulFocus, statefulValue, name)(Field)

UncontrolledField.displayName = 'UncontrolledField'

export default UncontrolledField
