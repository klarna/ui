import React from 'react'
import classNamesBind from 'classnames/bind'
import Content from '../Content'
import Link from '../../../Link'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import * as Variation from '../Variation'

import styles from './styles.scss'

const baseClass = 'page__template'

const classes = {
  header: `${baseClass}__header`,
  heading: `${baseClass}__heading`,
  icon: `${baseClass}__icon`,
  menuItem: `${baseClass}__menu__item`
}

export default function Template ({example}) {
  const classNames = classNamesBind.bind(styles)

  return <Content>
    <header className={classNames(classes.header)}>
      <Title.Primary className={classNames(classes.heading)}>
        {example.title}
      </Title.Primary>

      {example.variations && <Paragraph.Primary>
        {example.variations.map((variation) => <Link
        className={classNames(classes.menuItem)}
        key={`#${example.title}/${variation.title}`}
        href={`#${example.title}/${variation.title}`}>{variation.title}</Link>)}
      </Paragraph.Primary>}
    </header>

    {example.variations && example.variations.map((variation, index) => <Variation.Template key={index} {...variation} />)}

    {example.examples && <Variation.Template {...example.examples} />}
  </Content>
}
