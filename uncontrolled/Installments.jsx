import compose from 'ramda/src/compose'
import statefulValue from '../lib/decorators/statefulValue'
import statefulOptionFocus from '../lib/decorators/statefulOptionFocus'
import Installments from '../Installments'

const UncontrolledInstallments = compose(statefulOptionFocus, statefulValue)(Installments)

UncontrolledInstallments.displayName = 'UncontrolledInstallments'

export default UncontrolledInstallments
