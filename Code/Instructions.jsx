import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import jsx from './jsx'
import lowlight from 'lowlight/lib/core'
import highlight from './highlight'
import asCode from './asCode'
import styles from './styles.scss'

lowlight.registerLanguage('jsx', jsx)

export default ({ children }) => (
  <div className={styles.code}>
    <SyntaxHighlighter language='jsx' style={highlight}>
      {asCode(children)}
    </SyntaxHighlighter>
  </div>
)
