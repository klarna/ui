import Paragraph from '../../texts/Paragraph'
import themeable from '../../../lib/decorators/themeable'

const mapColor = ({ design }, { color_text, color_text_secondary }) => {
  switch (design) {
    case 'legal': return undefined
    case 'secondary': return color_text_secondary
    default: return color_text
  }
}

export default themeable(Paragraph, (customizations, props) => ({
  ...props,
  style: {
    ...props.style,
    color: mapColor(props, customizations)
  }
}))
