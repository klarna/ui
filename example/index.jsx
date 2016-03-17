import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'
import Fields from './Fields'
import Icons from './Icons'
import Loaders from './Loaders'
import Previews from './Previews'
import Switches from './Switches'
import SegmentedControls from './SegmentedControls'
import Texts from './Texts'
import Tooltips from './Tooltips'

import './index.scss'

function Root () {
  return (
    <main>
      <Previews />
      <Switches />
      <Texts />
      <Icons />
      <Fields />
      <Buttons />
      <Loaders />
      <Tooltips />
      <SegmentedControls />
    </main>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
