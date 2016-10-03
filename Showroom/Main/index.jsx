import React from 'react'
import Footer from '../Footer'
import GettingStarted from '../Page/GettingStarted'
import Grid from '../Grid'
import Link from '../../Link'
import Menu from '../Menu'
import Page from '../Page'
import Sidebar from '../Sidebar'
import K from '../K'
import { has } from 'ramda'

import 'normalize.css'
import './index.scss'

import styles from './styles.scss'

const getCurrentPage = ([anchor], examples) =>
  anchor
    ? (anchor === 'menu'
      ? <Menu examples={examples} />
      : <Page
        type={has(anchor, examples.components)
          ? 'component'
          : 'template'}
        example={examples.components[anchor] || examples.templates[anchor]}
      />
    )
    : <GettingStarted />

export default function Showroom ({route, grid, examples}) {
  return <main>
    {grid.display && <Grid
      offsets={grid.offsets}
      halfLine={5} height={grid.height}
      line={10} width={grid.width}
    />}

    <Sidebar examples={examples} selected={route[0]} />

    <Link className={styles['page__narrow--anchor']} href='#menu'>
      <K hoverable />
    </Link>

    <div className={styles.page__main}>
      {getCurrentPage(route, examples)}

      <Footer />
    </div>
  </main>
}
