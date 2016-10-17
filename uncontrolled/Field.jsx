import compose from '../lib/compose'
import statefulFocus from '../lib/decorators/statefulFocus'
import Field from '../Field'

const UncontrolledField = compose(statefulFocus)(Field)

UncontrolledField.displayName = 'UncontrolledField'

export default UncontrolledField
