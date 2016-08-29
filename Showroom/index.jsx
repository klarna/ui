import React, { PropTypes } from 'react'
import * as examples from './examples'
import Page from './Page'
import Sidebar from './Sidebar'

import 'normalize.css'
import './index.scss'

const getCurrentExample = ([anchor]) =>
  anchor
    ? examples[anchor]
    : Object.values(examples)[0]

export default function Showroom ({route}) {
  const example = getCurrentExample(route)

  return (
    <main>
      <Sidebar examples={examples} />
      <Page example={example} />
    </main>
  )
}

Showroom.propTypes = {
  route: PropTypes.arrayOf(PropTypes.string)
}
