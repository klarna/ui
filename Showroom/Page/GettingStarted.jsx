import React from 'react'
// import classNames from 'classnames'
import {Usage, Implementation, UX} from './icons/GettingStarted'
import * as UI from '../../'
// import Code from '../../Code'
import Footer from '../Footer'

import styles from './styles.scss'

export default function GettingStarted ({example}) {
  return (
    <article className={styles.content}>
      <header>
        <UI.Title.Primary margins>
          Getting started
        </UI.Title.Primary>
        <UI.Paragraph.Primary margins>
          Welcome to the UI guide. The goals of this document are:
        </UI.Paragraph.Primary>
        <ol className={styles.goals}>
          <li>
            <Usage />
            <UI.Paragraph.Secondary>
              To explain the usage of all components
            </UI.Paragraph.Secondary>
          </li>
          <li>
            <Implementation />
            <UI.Paragraph.Secondary>
              To clarify the reasoning behind their implementation
            </UI.Paragraph.Secondary>
          </li>
          <li>
            <UX />
            <UI.Paragraph.Secondary>
              To achieve a better user experience
            </UI.Paragraph.Secondary>
          </li>
        </ol>
        <nav className={styles.pageNav}>
        </nav>
      </header>
      <Footer />
    </article>
  )
}
