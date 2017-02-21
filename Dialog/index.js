import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

export default function Dialog ({children, layout, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div
    style={{
      ...finalStyles.base.dialog,
      ...finalStyles[layout].dialog
    }}
    {...props}>
    {children}
  </div>
}

Dialog.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.oneOf(['narrow', 'desktop', 'mobile']),
  styles: PropTypes.shape({
    base: PropTypes.shape({
      dialog: PropTypes.object
    })
  })
}

Dialog.defaultProps = {
  layout: 'desktop',
  styles: {
    base: {
      dialog: {}
    }
  }
}
