import React, { PropTypes } from 'react'
import Grid from '../Grid'
import Page from '../Page'
import Sidebar from '../Sidebar'
import GettingStarted from '../Page/GettingStarted'

import 'normalize.css'
import './index.scss'

const getCurrentPage = ([anchor], examples) =>
  anchor
    ? <Page example={examples[anchor]} />
    : <GettingStarted />

export default function Showroom ({route, grid, examples}) {
  return (
    <main>
      {grid && <Grid />}
      <Sidebar examples={examples} />
      {getCurrentPage(route, examples)}
    </main>
  )
}

Showroom.propTypes = {
  route: PropTypes.arrayOf(PropTypes.string)
}
