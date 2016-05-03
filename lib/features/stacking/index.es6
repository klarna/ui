import { PropTypes } from 'react'
import combinations from '../../../lib/combinations'
import fieldSizeFraction from '../../../propTypes/fieldSizeFraction'

export const position = {
  defaultProps: {
    bottom: false,
    center: false,
    left: false,
    right: false,
    top: false
  },

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

  positionCombinations: combinations(
    ['bottom', 'top'],
    ['left', 'right']
  ),

  positionList: [
    'bottom',
    'center',
    'left',
    'right',
    'top'
  ],

  propTypes: {
    bottom: PropTypes.bool,
    center: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool
  }
}

const MAX_SIZE = 5

export const size = {
  defaultProps: {
    size: '1/1'
  },

  getClassName: (props) => size.map[props.size],

  map: {
    '1/2': 'half',
    '1/3': 'third',
    '2/3': 'two-thirds',
    '1/4': 'quarter',
    '2/4': 'half',
    '3/4': 'three-quarters',
    '1/5': 'twenty',
    '2/5': 'forty',
    '3/5': 'sixty',
    '4/5': 'eighty'
  },

  max: MAX_SIZE,

  propTypes: {
    size: fieldSizeFraction(MAX_SIZE)
  }
}
