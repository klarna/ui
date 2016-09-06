import React from 'react'
import classNames from 'classnames'
import * as icons from './icons'
import * as UI from '../../'
import Code from '../../Code'
import Footer from '../Footer'
import CodeBlock from '../../Code/Block'

import styles from './styles.scss'

export default function Page ({example}) {
  const Icon = icons[example.icon]

  return (
    <article className={styles.content}>
      <header>
        {example.icon && <Icon />}
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
    <section key={`#${exampleTitle}/${title}`}>
      <a name={`${exampleTitle}/${title}`}></a>
      <UI.Title.Primary className={styles.designTitle} margins>
        {title}
      </UI.Title.Primary>
      <div style={{background: '#363636', padding: '2%', borderRadius: '4px'}}>
        <CodeBlock language='imports'>{require}</CodeBlock>
      </div>
      {
        Object.keys(sections).map((section) => {
          const hasStructure = sections[section].example != null
          const example = hasStructure
            ? sections[section].example
            : sections[section]
          const wide = hasStructure
            ? !!sections[section].wide
            : false
          const customCode = hasStructure && sections[section].code

          return (
            <Section
              code={customCode}
              key={section}
              name={section} wide={wide}>
              {example}
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
