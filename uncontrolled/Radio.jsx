import compose from '../lib/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulOptionFocus from '../lib/decorators/statefulOptionFocus'
import Radio from '../Radio'

const UncontrolledRadio = compose(statefulOptionFocus, statefulValue)(Radio)

UncontrolledRadio.displayName = 'UncontrolledRadio'

export default UncontrolledRadio
