import React from 'react'
import defaultStyles from './styles'

function Footer ({children, ...props}) {
  return <footer
    style={{
      ...defaultStyles.base.main
    }}
    {...props}>
    {children}
  </footer>
}

export default Footer
