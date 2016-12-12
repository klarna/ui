import Installments from '../Installments'
import deprecated from '../decorators/deprecated'

export default deprecated(
  Installments,
  'ThemeableInstallments',
  'Installments',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)
