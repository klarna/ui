import * as List from '../List'
import deprecated from '../decorators/deprecated'

export const Unordered = deprecated(
  List.Unordered,
  'ThemeableList.Unordered',
  'List.Unordered',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)

export const Ordered = deprecated(
  List.Ordered,
  'ThemeableList.Ordered',
  'List.Ordered',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)

export const Item = deprecated(
  List.Item,
  'ThemeableList.Item',
  'List.Item',
  'https://github.com/klarna/ui/releases/tag/v1.5.0'
)
