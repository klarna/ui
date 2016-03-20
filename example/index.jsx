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
import Selectors from './Selectors'
import Texts from './Texts'
import Tooltips from './Tooltips'

import { PrimaryTitle } from '../components/Text'

import './index.scss'

const examples = [
  Previews,
  Switches,
  Texts,
  Icons,
  Fields,
  Buttons,
  Loaders,
  Tooltips,
  SegmentedControls,
  Selectors
]

function Root () {
  return (
    <main>
      <nav>
        {
          examples.map((Example) => {
            return (
              <a
                href={`#${Example.name}`}
                key={Example.name}>
                {Example.name}
              </a>
            )
          })
        }
      </nav>
      {
        examples.map((Example, idx) => {
          return (
            <div key={Example.name}>
              <a name={Example.name} />
              <PrimaryTitle>{Example.name}</PrimaryTitle>
              <Example />
            </div>
          )
        })
      }
    </main>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
