import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'

import './index.scss'

function Root () {
  return (
    <div>
      <Buttons />
    </div>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
