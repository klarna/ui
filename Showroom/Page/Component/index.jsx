import React from 'react'
import classNamesBind from 'classnames/bind'
import * as icons from '../icons'
import Content from '../Content'
import Link from '../../../Link'
import * as Title from '../../../Title'
import * as Variation from '../Variation'

// import defaultStyles from './styles.scss'

export default function Component ({example, styles}) {
  // const classNames = classNamesBind.bind(defaultStyles)
  const Icon = icons[example.icon]

  return <Content>
    <header>
      {example.icon && <Icon />}

      <Title.Primary margins>
        {example.title}
      </Title.Primary>

      <nav>
        {example.variations.map((variation) => <Link
          key={`#${example.title}/${variation.title}`}
          href={`#${example.title}/${variation.title}`}>
          {variation.title}
        </Link>)}
      </nav>
    </header>

    {example.variations.map((variation, index) => <Variation.Component
      key={index}
      exampleTitle={example.title}
      {...variation}
    />)}
  </Content>
}

/* <article className={classNames('content')}>
<header>
{example.icon && <Icon />}

<Title.Primary margins>
{example.title}
</Title.Primary>

<nav className={classNames('pageNav')}>
{example.variations.map((variation) => <Link
key={`#${example.title}/${variation.title}`}
href={`#${example.title}/${variation.title}`}>
{variation.title}
</Link>)}
</nav>
</header>

{example.variations.map((variation, index) => <Variation.Component
key={index}
exampleTitle={example.title}
{...variation}
/>)}
</article> */
