import React from 'react'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Chevron from '../../icons/Chevron'
import styles from './styles.scss'

export default function Sidebar ({examples, selected}) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <a href='#'>
          <svg
            className={styles.sidebarK}
            width='20' height='27' viewBox='0 0 20 27'>
            <title>K</title>
            <path
              d='M7.18 12.4c4.4-.06 8.5-2.46 10.7-6.3 1.08-1.84 1.66-3.95 1.7-6.1-2.16.03-4.27.6-6.13 1.68-3.82 2.2-6.22 6.3-6.27 10.7M5.05 0h-3.5C.7 0 0 .7 0 1.55V25.7c0 .28.24.58.62.58h3.5c.86 0 1.56-.7 1.56-1.56V.54c0-.3-.27-.54-.63-.54M7.18 13.95c.05 4.4 2.45 8.5 6.27 10.7 1.86 1.08 3.97 1.66 6.12 1.7-.03-2.17-.6-4.28-1.68-6.13-2.22-3.83-6.32-6.22-10.72-6.27'
            />
          </svg>
        </a>

        <Paragraph.Primary className={styles.menuTitle}>
          <Link
            className={selected === '' && styles.menuItemSelected}
            href='#'>
            Getting started
          </Link>
        </Paragraph.Primary>

        <Paragraph.Primary className={styles.menuTitle}>
          <Link className={styles.menuTitleLink}>
            Components
            <Chevron.Down className={styles.chevron} />
          </Link>
        </Paragraph.Primary>

        <div>
          {Object.values(examples.components).map(({title}, index) => <Paragraph.Primary key={index} className={styles.menuItem}>
            <Link
              className={title === selected && styles.menuItemSelected}
              href={`#${title}`}
              key={title}>
              {title}
            </Link>
          </Paragraph.Primary>)}
        </div>

        <Paragraph.Primary className={styles.menuTitle}>
          <Link className={styles.menuTitleLink}>
            Templates
            <Chevron.Down className={styles.chevron} />
          </Link>
        </Paragraph.Primary>

        <div>
          {Object.values(examples.templates).map(({title}, index) => <Paragraph.Primary key={index} className={styles.menuItem}>
            <Link
              className={title === selected && styles.menuItemSelected}
              href={`#${title}`}
              key={title}>
              {title}
            </Link>
          </Paragraph.Primary>)}
        </div>

        <Paragraph.Primary className={styles.menuTitle}>
          <Link className={styles.menuTitleLink}>
            Compositions
            <Chevron.Down className={styles.chevron} />
          </Link>
        </Paragraph.Primary>

        <div>
          {Object.values(examples.compositions).map(({title}, index) => <Paragraph.Primary key={index} className={styles.menuItem}>
            <Link
              className={title === selected && styles.menuItemSelected}
              href={`#${title}`}
              key={title}>
              {title}
            </Link>
          </Paragraph.Primary>)}
        </div>
      </nav>
    </aside>
  )
}
