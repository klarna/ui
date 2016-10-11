import Primary from '../../Button/Primary'
import themeable from '../../decorators/themeable'

const Component = themeable(Primary, (customizations, { customize }) => ({
  customize: {
    ...customize,
    backgroundColor: customizations.color_button,
    borderRadius: customizations.radius_border,
    textColor: customizations.color_button_text
  }
}))

Component.displayName = 'ThemeableButton.Primary'

export default Component
