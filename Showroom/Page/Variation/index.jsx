import React from 'react'
import Example from '../Example'
import * as Title from '../../../Title'
import * as Code from '../../../Code'

import styles from './styles.scss'

export function Component ({exampleTitle, title, require, ...sections}) {
  return (
    <section className={styles.section} key={`#${exampleTitle}/${title}`}>
      <a name={`${exampleTitle}/${title}`}></a>

      <Title.Primary className={styles.designTitle} margins>
        {title}
      </Title.Primary>

      <Code.Block language='imports' standalone>{require}</Code.Block>

      {Object.keys(sections).map((section) => {
          const hasStructure = sections[section].example != null
          const example = hasStructure
            ? sections[section].example
            : sections[section]
          const wide = hasStructure
            ? !!sections[section].wide
            : false
          const customCode = hasStructure && sections[section].code

          return <Example
            code={customCode}
            key={section}
            name={section} wide={wide}>
            {example}
          </Example>
      })}
    </section>
  )
}

export function Template ({ exampleTitle, title, require, ...sections }) {
  return (
    <section className={styles.section} key={`#${exampleTitle}/${title}`}>
      <a name={`${exampleTitle}/${title}`}></a>

      <Title.Primary className={styles.designTitle} margins>
        {title}
      </Title.Primary>

      <Code.Block language='imports' standalone>{require}</Code.Block>

      {Object.keys(sections).map((section) => <Example
        code={undefined}
        key={section}
        name={section}>
        {sections[section].inline}
      </Example>)}
    </section>
  )
}
