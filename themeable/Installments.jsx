import Installments from '../Installments'
import themeable from '../lib/decorators/themeable'

const Component = themeable(Installments, (customizations, props) => ({
  customize: {
    ...props.customize,
    borderColor: customizations.color_border,
    borderColorSelected: customizations.color_border_selected,
    borderRadius: customizations.radius_border,
    labelColor: customizations.color_text
  }
}))

Component.displayName = 'ThemeableInstallments'

export default Component
