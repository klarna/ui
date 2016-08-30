import React from 'react'
import CodeBlock from './Block'
import classNames from 'classnames'
import styles from './styles.scss'

export default ({ customCode, children, width, wide }) => (
  <section className={styles.variation} style={width && { width }}>
    <article className={classNames(styles.live, { [styles.wide]: wide })}>
      {children}
    </article>

    <div className={classNames(styles.code, { [styles.narrow]: wide })}>
      {customCode
        ? (<pre style={{color: 'white', fontFamily: 'Fira Code'}}><code>{customCode}</code></pre>)
        : (<CodeBlock>
          {children}
        </CodeBlock>)
      }
    </div>
  </section>
)
