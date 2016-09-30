import React from 'react'
import Block from '../Block'
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

    <Block
      className={wide && styles.narrow}>
      {customCode || asCode(children)}
    </Block>
  </section>
}
