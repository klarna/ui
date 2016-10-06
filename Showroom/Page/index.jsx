import React from 'react'
import classNamesBind from 'classnames/bind'
import * as icons from './icons'
import Content from './Content'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import Variation from './Variation'
import toSlug from '../../lib/toSlug'

import styles from './styles.scss'

const baseClass = 'page'

const classes = {
  header: `${baseClass}__header`,
  heading: `${baseClass}__heading`,
  icon: `${baseClass}__icon`,
  menuItem: `${baseClass}__menu__item`
}

export default function Page ({example, type}) {
  const classNames = classNamesBind.bind(styles)
  const Icon = icons[example.icon]

  return <Content>
    <header className={classNames(classes.header)}>
      {example.icon && <Icon className={classNames(classes.icon)} />}

      <Title.Primary
        className={classNames(classes.heading)}>
        {example.title}
      </Title.Primary>

      {example.variations && <Paragraph.Primary>
        {example.variations.map((variation) => <Link
          className={classNames(classes.menuItem)}
          key={`#${example.title}/${variation.title}`}
          href={`#${example.title}/${toSlug(variation.title)}`}>{variation.title}</Link>)}
      </Paragraph.Primary>}
    </header>

    {example.variations && example.variations.map((variation, index) => <Variation key={index} {...variation} exampleTitle={example.title} />)}

    {example.examples && <Variation {...example.examples} />}
  </Content>
}
