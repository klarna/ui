import React from 'react'
import Highlight from '../Highlight'
import styles from './styles.scss'

export default function Block ({children}) {
  return <div
    className={styles.code__block__code}>
    <Highlight>{children}</Highlight>
  </div>
}
