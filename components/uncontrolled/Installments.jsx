import statefulValue from '../../lib/decorators/statefulValue'
import Installments from '../Installments'

const UncontrolledInstallments = statefulValue(Installments)

UncontrolledInstallments.displayName = 'UncontrolledInstallments'

export default UncontrolledInstallments
