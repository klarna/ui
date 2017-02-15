import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import withHoverStyles from '../../lib/toMoveToHoCs/withHoverStyles'
import withTouchStyles from '../../lib/toMoveToHoCs/withTouchStyles'

import * as Chevron from '../../icons/Chevron'
import defaultStyles from './styles'

function ExpandLabel ({label, style, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles.base, styles)

  return <footer style={{...finalStyles.main, ...style}} {...props}>
    {label} <Chevron.Down color='black' style={finalStyles.chevron} />
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
  withHoverStyles(defaultStyles.active),
  withTouchStyles(defaultStyles.active)
)(ExpandLabel)
