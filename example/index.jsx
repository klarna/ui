import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Title } from '../Text'
import Link from '../Link'
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

const Page = ({example}) => (
  <article className={styles.content}>
    <header>
      <Title.Primary margins>{example.title}</Title.Primary>
      <nav>
        {
          example.variations.map((variation) => (
            <Link
              key={`#${example.title}/${variation.title}`}
              href={`#${example.title}/${variation.title}`}>
              {variation.title}
            </Link>
          ))
        }
      </nav>
    </header>
    {
      example.variations.map((variation) => (
        <section key={variation.title}>
          <Title.Primary className={styles.variationTitle} margins>{variation.title}</Title.Primary>
          {
            Object.keys(variation).filter((section) => section !== 'title').map((section) => (
              <section key={section}>
                {icons[example.icon]}
                =={example.icon}==

                <Title.Secondary margins>
                  {section}
                </Title.Secondary>
                {variation[section]}
              </section>
            ))
          }
        </section>
      ))
    }
  </article>
)

function Root () {
  const example = getCurrentExample()
  const Icon = getCurrentIcon()
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
