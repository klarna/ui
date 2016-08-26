import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Title } from '../Text'
import Link from '../Link'
import * as examples from './examples'
import * as icons from './icons'
import Code from '../Code'

import styles from './index.scss'
import K from './K'

const getCurrentExample = () => {
  const anchor = window.location.hash.substring(1)
  return anchor && examples[anchor] || Object.values(examples)[0]
}

const selected = (path) => ({selected: getCurrentExample().name === path})

const Page = ({example}) => {
  const Icon = icons[example.icon]

  return (
    <article className={styles.content}>
      <header>
        <Icon />
        <Title.Primary margins>{example.title}</Title.Primary>
        <nav className={styles.pageNav}>
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
          <section key={`#${example.title}/${variation.title}`}>
            <a name={`${example.title}/${variation.title}`}></a>
            <Title.Primary className={styles.designTitle} margins>{variation.title}</Title.Primary>
            {
              Object.keys(variation).filter((section) => section !== 'title').map((section) => (
                <section key={section}>
                  <Title.Secondary margins className={styles.variationTitle}>
                    {section}
                  </Title.Secondary>
                  <Code>
                    {variation[section]}
                  </Code>
                </section>
              ))
            }
          </section>
        ))
      }
    </article>
  )
}

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
