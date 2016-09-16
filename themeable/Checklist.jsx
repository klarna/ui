import * as Checklist from '../Checklist'
import themeable from '../lib/decorators/themeable'

export const Main = themeable(Checklist.Main, (customizations, props) => ({
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderRadius: customizations.radius_border
  }
}))

Main.displayName = 'ThemeableChecklist.Main'

export const Item = themeable(Checklist.Item, (customizations, props) => ({
  customize: {
    ...props.customize,
    strokeColor: customizations.color_detail,
    textColor: customizations.color_text
  }
}))

Item.displayName = 'ThemeableChecklist.Item'
