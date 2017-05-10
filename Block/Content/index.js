import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'

const defaultStyles = {
  base: {
    main: {
      display: 'block',
      margin: '0 auto',
      maxWidth: grid(128)
    }
  }
}

function Content ({ children, styles, ...props }) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.base.main}{...props}>
    {children}
  </div>
}

Content.displayName = 'Block.Content'

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default Content
