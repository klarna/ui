import React from 'react'
import * as icons from './icons'
import * as UI from '../../'
import Code from '../../Code'

import styles from './styles.scss'

export default function Page ({example}) {
  const Icon = icons[example.icon]

  return (
    <article className={styles.content}>
      <header>
        <Icon />
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
          <section key={`#${example.title}/${variation.title}`}>
            <a name={`${example.title}/${variation.title}`}></a>
            <UI.Title.Primary className={styles.designTitle} margins>
              {variation.title}
            </UI.Title.Primary>
            {
              Object.keys(variation).filter((section) => section !== 'title').map((section) => (
                <section key={section}>
                  <UI.Title.Secondary margins className={styles.variationTitle}>
                    {section}
                  </UI.Title.Secondary>
                  <Code>
                    {variation[section]}
                  </Code>
                </section>
              ))
            }
          </section>
        ))
      }
    </article>
  )
}
