import React, { PropTypes } from 'react'
import * as examples from './examples'
import Page from './Page'
import Sidebar from './Sidebar'
import GettingStarted from './Page/GettingStarted'

import 'normalize.css'
import './index.scss'

const getCurrentPage = ([anchor]) =>
  anchor
    ? <Page example={examples[anchor]} />
    : <GettingStarted />

export default function Showroom ({route}) {
  return (
    <main>
      <Sidebar examples={examples} />
      {getCurrentPage(route)}
    </main>
  )
}

Showroom.propTypes = {
  route: PropTypes.arrayOf(PropTypes.string)
}
