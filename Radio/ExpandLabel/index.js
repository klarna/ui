import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import withHoverStyles from '../../lib/toMoveToHoCs/withHoverStyles'

import * as Chevron from '../../icons/Chevron'
import defaultStyles, {chevron} from './styles'

function ExpandLabel ({label, style, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles.base, styles)

  return <footer style={{...finalStyles, ...style}} {...props}>
    {label} <Chevron.Down color='black' style={chevron} />
  </footer>
}

ExpandLabel.propTypes = {
  label: PropTypes.string.isRequired,
  styles: PropTypes.object
}

ExpandLabel.defaultProps = {
  styles: {}
}

export default compose(
  withHoverStyles(defaultStyles.hover)
)(ExpandLabel)
