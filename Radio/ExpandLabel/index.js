import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {withTouchProps, withHoverProps} from '@klarna/higher-order-components'

import * as Chevron from '../../icons/Chevron'
import defaultStyles from './styles'

function ExpandLabel ({active, label, style, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <footer
    style={{
      ...finalStyles.base.main,
      ...(active ? finalStyles.active.main : {}),
      ...style
    }}
    {...props}>
    {label} <Chevron.Down color='black' style={finalStyles.base.chevron} />
  </footer>
}

ExpandLabel.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  styles: PropTypes.object
}

ExpandLabel.defaultProps = {
  styles: {},
  active: false
}

export default compose(
  withHoverProps({active: true}),
  withTouchProps({active: true})
)(ExpandLabel)
