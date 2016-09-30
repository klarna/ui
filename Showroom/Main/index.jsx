import React from 'react'
import Footer from '../Footer'
import GettingStarted from '../Page/GettingStarted'
import Grid from '../Grid'
import Menu from '../Menu'
import * as Page from '../Page'
import Sidebar from '../Sidebar'
import NarrowLayoutLogo from '../NarrowLayoutLogo'
import { has } from 'ramda'

import 'normalize.css'
import './index.scss'

import styles from './styles.scss'

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
      {grid.display && <Grid
        offsets={grid.offsets}
        halfLine={5} line={10}
      />}

      <Sidebar examples={examples} selected={route[0]} />

      <NarrowLayoutLogo />

      <div className={styles.page__main}>        
        {getCurrentPage(route, examples)}

        <Footer />
      </div>
    </main>
  )
}
