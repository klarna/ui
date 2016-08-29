import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import * as examples from './examples'
import Page from './Page'
import Sidebar from './Sidebar'

import styles from './index.scss'

const getCurrentExample = () => {
  const anchor = window.location.hash.substring(1)
  return anchor && examples[anchor] || Object.values(examples)[0]
}

const selected = (path) => ({selected: getCurrentExample().name === path})

function Root () {
  const example = getCurrentExample()

  return (
    <main>
      <Sidebar examples={examples} selected={selected} />
      <Page example={example} />
    </main>
  )
}

const render = () =>
  ReactDOM.render(<Root />, document.getElementById('root'))

window.onhashchange = render
render()
