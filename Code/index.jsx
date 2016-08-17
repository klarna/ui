import React from 'react'
import CodeBlock from './Block'
import styles from './styles.scss'

export default ({ children, width }) => (
  <section className={styles.variation} style={width && { width }}>
    <article className={styles.live}>
      {children}
    </article>
    <CodeBlock>
      {children}
    </CodeBlock>
  </section>
)
