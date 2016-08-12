import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Title } from '../Text'
import Link from '../Link'
import * as examples from './examples'
import styles from './index.scss'

function Root () {
  const anchor = window.location.hash.substring(1)
  const Example = anchor && examples[anchor] || Object.values(examples)[0]

  return (
    <main>
      <aside>
        <nav>
          {
            Object.values(examples).map(({ name }) => (
              <Link
                href={`#${name}`}
                className={classNames({selected: Example.name === name})}
                key={name}>
                {name}
              </Link>
            ))
          }
        </nav>
      </aside>
      <div className={styles.example}>
        <Title.Primary margins>{Example.name}</Title.Primary>
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
