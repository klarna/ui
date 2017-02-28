import React from 'react'
import {Usage, Implementation, UX} from '../icons/GettingStarted'
import * as Code from '../../../Code'
import Content from '../Content'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import Subtitle from '../../../Subtitle'

import grid from '../../../settings/grid'

import styles from './styles.scss'

export default function GettingStarted ({example}) {
  return <Content>
    <header className={styles['getting-started__header']}>
      <Title.Primary margins>
        Getting started
      </Title.Primary>

      <Paragraph.Primary margins>
        Welcome to the UI guide. The goals of this document are:
      </Paragraph.Primary>

      <ol className={styles['getting-started__goals']}>
        <li className={styles['getting-started__goals__item']}>
          <Usage />

          <Paragraph.Secondary
            className={styles['getting-started__goals__item__text']}>
            To explain the usage of all components
          </Paragraph.Secondary>
        </li>

        <li className={styles['getting-started__goals__item']}>
          <Implementation />

          <Paragraph.Secondary
            className={styles['getting-started__goals__item__text']}>
            To clarify the reasoning behind their implementation
          </Paragraph.Secondary>
        </li>

        <li className={styles['getting-started__goals__item']}>
          <UX />

          <Paragraph.Secondary
            className={styles['getting-started__goals__item__text']}>
            To achieve a better user experience
          </Paragraph.Secondary>
        </li>
      </ol>
    </header>

    <section>
      <Title.Primary
        className={styles['getting-started__design-title']}
        margins>
        Instructions
      </Title.Primary>


      <div style={{display: 'flex'}}>
        <div
          style={{
            marginRight: grid(8),
            width: 'calc(60% - 20px)'
          }}>
          <Title.Secondary margins>
            Install
          </Title.Secondary>

          <Code.Block standalone style={{marginTop: grid(1)}}>
            npm install react react-motion @klarna/ui --save
          </Code.Block>
        </div>

        <div
          style={{
            width: '40%'
          }}>
          <Title.Secondary margins>
            Grid
          </Title.Secondary>

          <Paragraph.Secondary>
            Press <code>G</code> on any screen in this showroom to trigger the grid. Everything should be aligned with the grid.
          </Paragraph.Secondary>
        </div>
      </div>
    </section>
  </Content>
}
