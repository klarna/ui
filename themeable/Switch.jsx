import * as Switch from '../Switch'
import themeable from '../lib/decorators/themeable'

export const Checkbox = themeable(Switch.Checkbox, (customizations, props) => ({
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_checkbox,
    bulletColor: customizations.color_checkbox_checkmark
  }
}))

Checkbox.displayName = 'ThemeableSwitch.Checkbox'

export const Toggle = themeable(Switch.Toggle, (customizations, props) => ({
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_checkbox,
    bulletColor: customizations.color_checkbox_checkmark
  }
}))

Toggle.displayName = 'ThemeableSwitch.Toggle'
