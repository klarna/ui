import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Title } from '../Text'
import Link from '../Link'
import * as examples from './examples'
import * as icons from './icons'
import Page from './Page'

import styles from './index.scss'
import K from './K'

console.log(examples)

const getCurrentExample = () => {
  const anchor = window.location.hash.substring(1)
  return anchor && examples[anchor] || Object.values(examples)[0]
}

const selected = (path) => ({selected: getCurrentExample().name === path})

function Root () {
  const example = getCurrentExample()
  return (
    <main>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebarNav}>
          <K className={styles.k}/>
          <a href='#/' className={classNames(styles.menuTitle, selected('/'))} >
            Getting started
          </a>
          <a href='#/components' className={classNames(styles.menuTitle, selected('/components'))} >
            Components
          </a>

          {
            Object.values(examples).map(({ title }) => (
              <a
                href={`#${title}`}
                className={classNames(styles.menuItem, selected(title))}
                key={title}>
                {title}
              </a>
            ))
          }
        </nav>
      </aside>
      <Page example={example} />
    </main>
  )
}

const render = () =>
  ReactDOM.render(<Root />, document.getElementById('root'))

window.onhashchange = render
render()
