import React from 'react'
import Grid from '../Grid'
import Menu from '../Menu'
import * as Page from '../Page'
import Sidebar from '../Sidebar'
import GettingStarted from '../Page/GettingStarted'
import { has } from 'ramda'

import 'normalize.css'
import './index.scss'

const getCurrentPage = ([anchor], examples) =>
  anchor
    ? (anchor === 'menu'
      ? <Menu examples={examples} />
      : (has(anchor, examples.components)
          ? <Page.Component example={examples.components[anchor]} />
          : <Page.Template example={examples.templates[anchor]} />
      )
    )
    : <GettingStarted />

export default function Showroom ({route, grid, examples}) {
  return (
    <main>
      {grid.display && (
        <Grid
          offsets={grid.offsets}
          halfLine={5} line={10}
        />
      )}
      <Sidebar examples={examples} />
      {getCurrentPage(route, examples)}
    </main>
  )
}
