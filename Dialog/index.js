import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

export default function Dialog ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.base.dialog} {...props}>
    {children}
  </div>
}

Dialog.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    base: PropTypes.shape({
      dialog: PropTypes.object
    })
  })
}

Dialog.defaultProps = {
  styles: {
    base: {
      dialog: {}
    }
  }
}
