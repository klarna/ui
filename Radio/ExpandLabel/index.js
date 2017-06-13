import React from 'react'
import PropTypes from 'prop-types'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {withTouchProps, withHoverProps} from '@klarna/higher-order-components'

import * as Chevron from '../../icons/Chevron'
import defaultStyles from './styles'

function ExpandLabel ({
  active,
  disabled,
  label,
  onDOMElement,
  style,
  styles,
  onClick,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <footer
    ref={(domElement) => onDOMElement(domElement)}
    style={{
      ...finalStyles.base.main,
      ...(active ? finalStyles.active.main : {}),
      ...style,
      ...(disabled ? finalStyles.disabled.main : {})
    }}
    onClick={e => disabled || onClick(e)}
    {...props}>
    {label} <Chevron.Down color='black' style={finalStyles.base.chevron} />
  </footer>
}

ExpandLabel.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}

ExpandLabel.defaultProps = {
  styles: {},
  active: false,
  disabled: false
}

export default compose(
  withHoverProps({active: true}),
  withTouchProps({active: true})
)(ExpandLabel)
