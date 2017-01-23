import { PropTypes } from 'react'
import { getContextualizer } from 'react-context-props'
import brandVolumeLevels from '../lib/brandVolumeLevels'


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
  }),
  brandVolume: PropTypes.oneOf(brandVolumeLevels)
})

Theme.displayName = 'Theme'

export default Theme

export const DEFAULTS = {
  color_border: '#cbcbcd',
  color_border_selected: 'rgba(26, 140, 220, 0.8)',
  color_button: '#0074c8',
  color_button_text: '#ffffff',
  color_checkbox: '#0074c8',
  color_checkbox_checkmark: '#ffffff',
  color_details: '#0074c8',
  color_header: '#3c3c3e',
  color_link: '#0074c8',
  color_text: '#3c3c3e',
  color_text_secondary: '#8e8e90',
  radius_border: '5px'
}
