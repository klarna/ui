import React from 'react'
import styles from './styles.scss'

export default function Content ({children}) {
  return <article className={styles.page__content}>{children}</article>
}
