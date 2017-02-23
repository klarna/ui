import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {withDisplayName} from '@klarna/higher-order-components'
import withLayoutProps from '../lib/hocToMove/withLayoutProps'
import defaultStyles from './styles'

function Dialog ({
  children,
  fixed,
  smallPadding,
  styles,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div
    style={{
      ...finalStyles.base.dialog,
      ...(fixed ? finalStyles.fixed.dialog : finalStyles.smallPadding.dialog),
      ...(smallPadding ? finalStyles.smallPadding.dialog : finalStyles.bigPadding.dialog)
    }}
    {...props}>
    {children}
  </div>
}

Dialog.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  smallPadding: PropTypes.bool,
  styles: PropTypes.shape({
    base: PropTypes.shape({
      dialog: PropTypes.object
    })
  })
}

Dialog.defaultProps = {
  fixed: false,
  smallPadding: false,
  styles: {
    base: {
      dialog: {}
    }
  }
}

export default compose(
  withDisplayName('Dialog'),
  withLayoutProps({
    narrow: {
      fixed: true,
      smallPadding: true
    },
    mobile: {
      fixed: true
    },
    desktop: {
      smallPadding: true
    }
  })
)(Dialog)
