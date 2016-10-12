import * as Checklist from '../Checklist'
import deprecated from '../decorators/deprecated'

export const Main = deprecated(
  Checklist.Main,
  'ThemeableChecklist.Main',
  'Checklist.Main',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)

export const Item = deprecated(
  Checklist.Item,
  'ThemeableChecklist.Item',
  'Checklist.Item',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)
