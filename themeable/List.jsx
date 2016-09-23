import * as List from '../List'
import themeable from '../lib/decorators/themeable'

export const Unordered = themeable(List.Unordered, () => ({}))

Unordered.displayName = 'ThemeableList.Unordered'

export const Ordered = themeable(List.Ordered, () => ({}))

Ordered.displayName = 'ThemeableList.Ordered'

export const Item = themeable(List.Item, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))

Item.displayName = 'ThemeableList.Item'
