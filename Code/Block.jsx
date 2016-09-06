import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import jsx from './jsx'
import imports from './imports'
import lowlight from 'lowlight/lib/core'
import highlight from './highlight'

lowlight.registerLanguage('jsx', jsx)
lowlight.registerLanguage('imports', imports)

export default ({ children, language }) => (
  <SyntaxHighlighter language={language || 'jsx'} style={highlight}>
    {children}
  </SyntaxHighlighter>
)
