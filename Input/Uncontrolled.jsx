import compose from '../lib/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulFocus from '../lib/decorators/statefulFocus'
import Input from './'

const UncontrolledInput = compose(statefulFocus, statefulValue)(Input)

UncontrolledInput.displayName = 'UncontrolledInput'

export default UncontrolledInput
