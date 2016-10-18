import { PropTypes } from 'react'
import { getContextualizer } from 'react-context-props'

const Theme = getContextualizer({
  customizations: PropTypes.shape({
    color_button: PropTypes.string.isRequired,
    color_button_text: PropTypes.string.isRequired,
    color_checkbox: PropTypes.string.isRequired,
    color_checkbox_checkmark: PropTypes.string.isRequired,
    color_text: PropTypes.string.isRequired,
    color_header: PropTypes.string.isRequired,
    color_link: PropTypes.string.isRequired,
    color_border: PropTypes.string.isRequired,
    color_border_selected: PropTypes.string.isRequired,
    color_details: PropTypes.string.isRequired,
    color_text_secondary: PropTypes.string.isRequired,
    radius_border: PropTypes.string.isRequired
  })
})

Theme.displayName = 'Theme'

export default Theme
