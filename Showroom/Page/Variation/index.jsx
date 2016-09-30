import React from 'react'
import classNamesBind from 'classnames/bind'
import Example from '../Example'
import * as Title from '../../../Title'
import * as Code from '../../../Code'

import styles from './styles.scss'

const baseClass = 'page__variation'

const classes = {
  heading: `${baseClass}__heading`,
  navigation: `${baseClass}__navigation`,
  navigationComponent: `${baseClass}__navigation__component`,
  navigationReactCode: `${baseClass}__navigation__react--code`
}

const classNames = classNamesBind.bind(styles)

function VariationWrapper ({children, title, require}) {
  return <section className={classNames(baseClass)}>
    {title && <Title.Primary className={classNames(classes.heading)}>
      {title}
    </Title.Primary>}

    <div className={classNames(classes.navigation)}>
      <Title.Secondary className={classNames(classes.navigationComponent)}>Component</Title.Secondary>
      <Title.Secondary className={classNames(classes.navigationReactCode)}>React code</Title.Secondary>
    </div>

    <Code.Block language='imports' standalone>{require}</Code.Block>

    {children}
  </section>
}

export function Component ({title, require, ...sections}) {
  return <VariationWrapper
    title={title}
    require={require}>
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
        name={section}
        wide={wide}>
        {example}
      </Example>
    })}
  </VariationWrapper>
}

export function Template ({title, require, ...sections}) {
  return <VariationWrapper
    title={title}
    require={require}>
    {Object.keys(sections).map((section) => <Example
      code={undefined}
      key={section}
      name={section}>
      {sections[section].inline}
    </Example>)}
  </VariationWrapper>
}
