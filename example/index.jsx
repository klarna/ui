import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'
import ContextMenus from './ContextMenus'
import Dialogs from './Dialogs'
import Fields from './Fields'
import Icons from './Icons'
import Labels from './Labels'
import Links from './Links'
import Loaders from './Loaders'
import Menus from './Menus'
import Previews from './Previews'
import Switches from './Switches'
import Selectors from './Selectors'
import Texts from './Texts'
import Tooltips from './Tooltips'

import classNames from 'classnames'
import { PrimaryTitle } from '../components/Text'

import styles from './index.scss'

const examples = {
  Buttons,
  ContextMenus,
  Dialogs,
  Fields,
  Icons,
  Labels,
  Links,
  Loaders,
  Menus,
  Previews,
  Selectors,
  Switches,
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
