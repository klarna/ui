import PrimaryTitle from '../../texts/PrimaryTitle'
import themeable from '../../../lib/decorators/themeable'

export default themeable(PrimaryTitle, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))
