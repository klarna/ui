import { PropTypes } from 'react'
import combinations from '../../../lib/combinations'

export const position = {
  getClassName: () => {},

  positionList: [
    'bottom',
    'center',
    'left',
    'right',
    'top'
  ],

  positionCombinations: combinations(
    ['bottom', 'top'],
    ['left', 'right']
  ),

  defaultProps: {
    bottom: false,
    center: false,
    left: false,
    right: false,
    top: false
  },

  propTypes: {
    bottom: PropTypes.bool,
    center: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool
  }
}
