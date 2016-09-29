import React from 'react'
import Highlight from '../Highlight'
import classNames from 'classnames'
import asCode from '../asCode'
import styles from './styles.scss'

export default function Example ({ customCode, children, width, wide }) {
  return <section
    className={styles.variation}
    style={width && { width }}>
    <article
      className={classNames(styles.live, { [styles.wide]: wide })}>
      {children}
    </article>

    <div
      className={classNames(styles.code, { [styles.narrow]: wide })}>
      <Highlight>
        {customCode || asCode(children)}
      </Highlight>
    </div>
  </section>
}
