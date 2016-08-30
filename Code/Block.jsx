import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import xml from 'highlight.js/lib/languages/xml'
import lowlight from 'lowlight/lib/core'
import highlight from './highlight'
import asCode from './asCode'

lowlight.registerLanguage('xml', xml)

export default ({ children }) => (
  <SyntaxHighlighter language='xml' style={highlight}>
    {asCode(children)}
  </SyntaxHighlighter>
)
