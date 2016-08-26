import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import highlight from './highlight'
import asCode from './asCode'

export default ({ children }) => (
  <SyntaxHighlighter language='xml' style={highlight}>
    {asCode(children)}
  </SyntaxHighlighter>
)
