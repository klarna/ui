import React from 'react'
import classNamesBind from 'classnames/bind'
import Example from '../Example'
import * as Title from '../../../Title'
import * as Code from '../../../Code'
import {LIVE, LIVE_WIDE, MANUAL, TEMPLATE, SHOWCASE} from '../../variationTypes'
import toSlug from '../../../lib/toSlug'

import styles from './styles.scss'

const baseClass = 'page__variation'

const classes = {
  heading: `${baseClass}__heading`,
  navigation: `${baseClass}__navigation`,
  navigationComponent: `${baseClass}__navigation__component`,
  navigationReactCode: `${baseClass}__navigation__react--code`,
  require: `${baseClass}__require`
}

const classNames = classNamesBind.bind(styles)

export default function Variation ({type, ...props}) {
  switch (type) {
    case LIVE:
      return <Live
        examples={props.examples}
        exampleTitle={props.exampleTitle}
        require={props.require}
        title={props.title}
      />

    case LIVE_WIDE:
      return <LiveWide
        examples={props.examples}
        exampleTitle={props.exampleTitle}
        require={props.require}
        title={props.title}
      />

    case MANUAL:
      return <Manual
        examples={props.examples}
        exampleTitle={props.exampleTitle}
        require={props.require}
        title={props.title}
      />

    case TEMPLATE:
      return <Template
        examples={props.examples}
        exampleTitle={props.exampleTitle}
        require={props.require}
        title={props.title}
      />

    case SHOWCASE:
      return <Showcase
        example={props.example}
        exampleTitle={props.exampleTitle}
        title={props.title}
      />
  }
}

function Live ({title, require, exampleTitle, examples}) {
  return <section id={title && `${exampleTitle}/${toSlug(title)}`} className={classNames(baseClass)}>
    {title && <Title.Primary
      className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    <div className={classNames(classes.navigation)}>
      <Title.Secondary
        className={classNames(classes.navigationComponent)}>
        Component
      </Title.Secondary>

      <Title.Secondary
        className={classNames(classes.navigationReactCode)}>
        React code
      </Title.Secondary>
    </div>

    <Code.Block
      className={classNames(classes.require)}
      language='imports'
      standalone>
      {require}
    </Code.Block>

    {Object.keys(examples).map((name, i) => <Example
      name={name}
      key={`${name}-${i}`}>
      {examples[name]}
    </Example>)}
  </section>
}

function LiveWide ({title, require, exampleTitle, examples}) {
  return <section id={title && `${exampleTitle}/${toSlug(title)}`} className={classNames(baseClass)}>
    {title && <Title.Primary
      className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    <div className={classNames(classes.navigation)}>
      <Title.Secondary
        className={classNames(classes.navigationComponent)}>
        Component
      </Title.Secondary>

      <Title.Secondary
        className={classNames(classes.navigationReactCode)}>
        React code
      </Title.Secondary>
    </div>

    <Code.Block language='imports' standalone>{require}</Code.Block>

    {Object.keys(examples).map((name) => <Example
      name={name}
      key={name}>
      {examples[name]}
    </Example>)}
  </section>
}

function Manual ({title, require, exampleTitle, examples}) {
  return <section id={title && `${exampleTitle}/${toSlug(title)}`} className={classNames(baseClass)}>
    {title && <Title.Primary
      className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    <div className={classNames(classes.navigation)}>
      <Title.Secondary
        className={classNames(classes.navigationComponent)}>
        Component
      </Title.Secondary>

      <Title.Secondary
        className={classNames(classes.navigationReactCode)}>
        React code
      </Title.Secondary>
    </div>

    <Code.Block
      language='imports'
      standalone>
      {require}
    </Code.Block>

    {Object.keys(examples).map((name) => <Example
      code={examples[name].code}
      name={name}
      key={name}>
      {examples[name].live}
    </Example>)}
  </section>
}

function Template ({title, require, exampleTitle, examples}) {
  return <section id={title && `${exampleTitle}/${toSlug(title)}`} className={classNames(baseClass)}>
    {title && <Title.Primary
      className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    <div className={classNames(classes.navigation)}>
      <Title.Secondary
        className={classNames(classes.navigationComponent)}>
        Component
      </Title.Secondary>

      <Title.Secondary
        className={classNames(classes.navigationReactCode)}>
        React code
      </Title.Secondary>
    </div>

    <Code.Block language='imports' standalone>{require}</Code.Block>

    {Object.keys(examples).map((name, i) => <Example
      name={name}
      key={`${name}-${i}`}>
      {examples[name].inline}
    </Example>)}
  </section>
}

function Showcase ({title, example, exampleTitle}) {
  return <section id={title && `${exampleTitle}/${toSlug(title)}`} className={classNames(baseClass)}>
    {title && <Title.Primary
      className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    {example}
  </section>
}
