import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { PrimaryTitle } from '../components/Text'
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
              <a
                href={`#${name}`}
                className={classNames({selected: Example.name === name})}
                key={name}>
                {name}
              </a>
            ))
          }
        </nav>
      </aside>
      <div className={styles.example}>
        <PrimaryTitle>{Example.name}</PrimaryTitle>
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
