import statefulValue from '../lib/decorators/statefulValue'
import Radio from '../Radio'

const UncontrolledRadio = statefulValue(Radio)

UncontrolledRadio.displayName = 'UncontrolledRadio'

export default UncontrolledRadio
