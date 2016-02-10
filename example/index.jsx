import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'
import Loaders from './Loaders'

import './index.scss'

function Root () {
  return (
    <main>
      <Buttons />
      <Loaders />
    </main>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
