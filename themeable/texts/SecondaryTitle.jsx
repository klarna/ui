import SecondaryTitle from '../../texts/SecondaryTitle'
import themeable from '../../../lib/decorators/themeable'

export default themeable(SecondaryTitle, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))
