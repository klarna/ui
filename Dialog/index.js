import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
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
  withLayoutProps({
    narrow: {
      layout: 'narrow'
    },
    mobile: {
      layout: 'mobile'
    },
    desktop: {
      layout: 'desktop'
    }
  })
)
