import * as Switch from '../Switch'
import deprecated from '../decorators/deprecated'

export const Checkbox = deprecated(
  Switch.Checkbox,
  'ThemeableSwitch.Checkbox',
  'Switch.Checkbox',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)

export const Toggle = deprecated(
  Switch.Toggle,
  'ThemeableSwitch.Toggle',
  'Switch.Toggle',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)
