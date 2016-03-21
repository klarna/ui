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
import TabMenus from './TabMenus'
import Texts from './Texts'
import Tooltips from './Tooltips'

import classNames from 'classnames'
import { PrimaryTitle } from '../components/Text'

import './index.scss'

const examples = {
  Buttons,
  Fields,
  Icons,
  Loaders,
  Previews,
  SegmentedControls,
  Selectors,
  Switches,
  TabMenus,
  Texts,
  Tooltips
}

function Root () {
  const anchor = window.location.hash.substring(1)
  const Example = anchor && examples[anchor] || Buttons
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
      <div className='example'>
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
