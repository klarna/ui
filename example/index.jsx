import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Title } from '../Text'
import * as examples from './examples'
import * as icons from './icons'

import styles from './index.scss'
import K from './K'

const getCurrentExample = () => {
  const anchor = window.location.hash.substring(1)
  return anchor && examples[anchor] || Object.values(examples)[0]
}

const getCurrentIcon = () => {
  const anchor = window.location.hash.substring(1)
  return anchor && icons[anchor] || Object.values(icons)[0]
}

const selected = (path) => ({selected: getCurrentExample().name === path})

function Root () {
  const Example = getCurrentExample()
  const Icon = getCurrentIcon()
  return (
    <main>
      <aside className={styles.sidebar}>
        <nav>
          <K className={styles.k}/>
          <a href='#/' className={classNames(styles.menuTitle, selected('/'))} >
            Getting started
          </a>
          <a href='#/components' className={classNames(styles.menuTitle, selected('/components'))} >
            Components
          </a>

          {
            Object.values(examples).map(({ name }) => (
              <a
                href={`#${name}`}
                className={classNames(styles.menuItem, selected(name))}
                key={name}>
                {name}
              </a>
            ))
          }
        </nav>
      </aside>
      <div className={styles.example}>
        <header>
          <Icon />
          <Title.Primary margins>{Example.name}</Title.Primary>
        </header>
        <Example />
      </div>
    </main>
  )
}

const render = () => (
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
)

window.onhashchange = render
render()
