import React from 'react'
import PropTypes from 'prop-types'
import deepMerge from 'deepmerge'

const defaultStyles = {
  main: {
    base: {
      display: 'block',
      textAlign: 'center'
    }
  },
  inner: {
    base: {
      margin: '0 auto'
    }
  }
}

function Footer ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <footer style={finalStyles.main.base}>
    <div style={finalStyles.inner.base}>
      {children}
    </div>
  </footer>
}

Footer.displayName = 'Block.Footer'

Footer.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
}

Footer.defaultProps = {
  styles: {}
}

export default Footer
