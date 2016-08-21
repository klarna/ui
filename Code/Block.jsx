import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import asString from 'react-to-jsx'
import solarized from './highlight'

export default function CodeBlock ({ children }) {
  const code = React.Children.map(children, (item) => {
    return asString(item, { indent: '  ' })
  }).join('')

  return (
    <SyntaxHighlighter language='xml' style={solarized}>
      {code}
    </SyntaxHighlighter>
  )
}
