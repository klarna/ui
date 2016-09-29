import React from 'react'
import classNames from 'classnames'
import * as UI from '../../'
import Code from '../../Code'
import Footer from '../Footer'
import CodeBlock from '../../Code/Block'
import NarrowLayoutLogo from '../NarrowLayoutLogo'

import styles from './styles.scss'

export default function Template ({example}) {
  return (
    <article className={styles.content}>
      <header>
        <NarrowLayoutLogo />

        <UI.Title.Primary margins>
          {example.title}
        </UI.Title.Primary>
        <nav className={styles.pageNav}>
        {
          example.variations.map((variation) => (
            <UI.Link
              key={`#${example.title}/${variation.title}`}
              href={`#${example.title}/${variation.title}`}>
              {variation.title}
            </UI.Link>
          ))
        }
        </nav>
      </header>
      {
        example.variations.map((variation) => (
          <Variation
            exampleTitle={example.title}
            {...variation}
          />
        ))
      }
      <Footer />
    </article>
  )
}

export function Variation ({ exampleTitle, title, require, ...sections }) {
  return (
    <section className={styles.section} key={`#${exampleTitle}/${title}`}>
      <a name={`${exampleTitle}/${title}`}></a>
      <UI.Title.Primary className={styles.designTitle} margins>
        {title}
      </UI.Title.Primary>
      <div style={{background: '#363636', padding: '2%', borderRadius: '4px', overflowX: 'scroll'}}>
        <CodeBlock language='imports'>{require}</CodeBlock>
      </div>
      {
        Object.keys(sections).map((section) => {
          return (
            <Section
              code={undefined}
              key={section}
              name={section}>
              {sections[section].inline}
            </Section>
          )
        })
      }
    </section>
  )
}

export function Section ({ code, children, name, wide }) {
  const className = classNames(styles.variationTitle, {
    [styles.wide]: wide
  })

  return (
    <section>
      <UI.Title.Secondary margins className={className}>
        {name}
      </UI.Title.Secondary>

      <Code customCode={code} wide={wide}>
        {children}
      </Code>
    </section>
  )
}
