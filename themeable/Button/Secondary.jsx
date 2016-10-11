import Secondary from '../../Button/Secondary'
import themeable from '../../decorators/themeable'

// TODO: borderRadius does not work for SecondaryButton
// because of the inner border-radius not matching up.
const Component = themeable(Secondary, (customizations, { customize }) => ({
  customize: {
    ...customize,
    backgroundColor: customizations.color_button,
    borderRadius: customizations.radius_border,
    textColor: customizations.color_button_text
  }
}))

Component.displayName = 'ThemeableButton.Secondary'

export default Component
