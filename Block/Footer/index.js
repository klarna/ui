import React from 'react'
import deepMerge from 'deepmerge'

const defaultStyles = {
  main: {
    base: {
      margin: '0 auto'
    }
  }
}

function Footer ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <footer style={finalStyles.main.base}>
    {children}
  </footer>
}

Footer.displayName = 'Block.Footer'
