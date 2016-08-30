import React from 'react'
import CodeBlock from './Block'
import classNames from 'classnames'
import asCode from './asCode'
import styles from './styles.scss'

export default ({ customCode, children, width, wide }) => (
  <section className={styles.variation} style={width && { width }}>
    <article className={classNames(styles.live, { [styles.wide]: wide })}>
      {children}
    </article>

    <div className={classNames(styles.code, { [styles.narrow]: wide })}>
      <CodeBlock>
        {
          customCode || asCode(children)
        }
      </CodeBlock>
    </div>
  </section>
)
