import Field from '../Field'
import deprecated from '../decorators/deprecated'

export default deprecated(
  Field,
  'ThemeableField',
  'Field',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)
