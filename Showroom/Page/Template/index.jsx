import React from 'react'
import classNames from 'classnames'
import Content from '../Content'
import Link from '../../../Link'
import * as Title from '../../../Title'
import * as Variation from '../Variation'

import styles from './styles.scss'

export default function Template ({example}) {
  return (
    <Content>
      <header>
        <Title.Primary margins>
          {example.title}
        </Title.Primary>

        <nav className={styles.pageNav}>
          {example.variations.map((variation, index) => <Link
            key={`#${example.title}/${variation.title}`}
            href={`#${example.title}/${variation.title}`}>
            {variation.title}
          </Link>)}
        </nav>
      </header>

      {example.variations.map((variation, index) => <Variation.Template
        key={index}
        exampleTitle={example.title}
        {...variation}
      />)}
    </Content>
  )
}
