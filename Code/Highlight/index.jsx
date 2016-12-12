import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {imports, jsx} from '../syntaxes'
import lowlight from 'lowlight/lib/core'

lowlight.registerLanguage('jsx', jsx)
lowlight.registerLanguage('imports', imports)

const highlightStyle = {
  'hljs': {
  },
  'hljs-component': {
    'color': '#D191F2'
  },
  'hljs-keyword': {
    'color': '#D191F2'
  },
  'hljs-prop': {
    'color': '#5CE6CD'
  },
  'hljs-string': {
    'color': '#F9E922'
  },
  'hljs-object': {
    'color': '#E34972'
  },
  'hljs-obj-key': {
    'color': '#ff00ff'
  }
}

export default function ({ children, language }) {
  return (
    <SyntaxHighlighter language={language || 'jsx'} style={highlightStyle}>
      {children}
    </SyntaxHighlighter>
  )
}
