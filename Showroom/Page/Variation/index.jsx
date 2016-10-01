import React from 'react'
import classNamesBind from 'classnames/bind'
import Example from '../Example'
import * as Title from '../../../Title'
import * as Code from '../../../Code'
import {LIVE, LIVE_WIDE, MANUAL, TEMPLATE, SHOWCASE} from '../../variationTypes'

import styles from './styles.scss'

const baseClass = 'page__variation'

const classes = {
  heading: `${baseClass}__heading`,
  navigation: `${baseClass}__navigation`,
  navigationComponent: `${baseClass}__navigation__component`,
  navigationReactCode: `${baseClass}__navigation__react--code`
}

export default function Variation ({type, ...props}) {
  const classNames = classNamesBind.bind(styles)

  switch (type) {
    case LIVE:
      return <section className={classNames(baseClass)}>
        {props.title && <Title.Primary
          className={classNames(classes.heading)}>
          {props.title}
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

        <Code.Block language='imports' standalone>{props.require}</Code.Block>

        {Object.keys(props.examples).map((name) => <Example
          name={name}
          key={name}>
          {props.examples[name]}
        </Example>)}
      </section>

    case LIVE_WIDE:
      return <section className={classNames(baseClass)}>
        {props.title && <Title.Primary
          className={classNames(classes.heading)}>
          {props.title}
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

        <Code.Block language='imports' standalone>{props.require}</Code.Block>

        {Object.keys(props.examples).map((name) => <Example
          name={name}
          key={name}>
          {props.examples[name]}
        </Example>)}
      </section>

    case MANUAL:
      return <section className={classNames(baseClass)}>
        {props.title && <Title.Primary
          className={classNames(classes.heading)}>
          {props.title}
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
          {props.require}
        </Code.Block>

        {Object.keys(props.examples).map((name) => <Example
          code={props.examples[name].code}
          name={name}
          key={name}>
          {props.examples[name].live}
        </Example>)}
      </section>

    case TEMPLATE:
      return <section className={classNames(baseClass)}>
        {props.title && <Title.Primary
          className={classNames(classes.heading)}>
          {props.title}
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

        <Code.Block language='imports' standalone>{props.require}</Code.Block>

        {Object.keys(props.examples).map((name) => <Example
          name={name}
          key={name}>
          {props.examples[name].inline}
        </Example>)}
      </section>

    case SHOWCASE:
      return <section className={classNames(baseClass)}>
        {props.title && <Title.Primary
          className={classNames(classes.heading)}>
          {props.title}
        </Title.Primary>}

        {props.example}
      </section>
  }
}
