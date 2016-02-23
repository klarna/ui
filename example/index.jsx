import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'
import Fields from './Fields'
import Icons from './Icons'
import Loaders from './Loaders'
import SegmentedControls from './SegmentedControls'

import './index.scss'

function Root () {
  return (
    <main>
      <Icons />
      <Fields />
      <Buttons />
      <Loaders />
      <SegmentedControls />
    </main>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
