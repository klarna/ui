import { PropTypes } from 'react'
import combinations from '../../../lib/combinations'

export const position = {
  getClassName: (props) =>
    (
      position.positionCombinations
        .concat(position.positionList.map((x) => [x]))
        .find((combination) =>
          combination.length === 1
            ? props[combination[0]]
            : (props[combination[0]] && props[combination[1]])
        ) || []
    ).join('-')
  ,

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
