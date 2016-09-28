import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Block from '../../Block'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import defaultStyles from './styles.scss'

const baseClass = 'explanation'

const classes = {
  title: `${baseClass}__title`,
  content: `${baseClass}__content`,
  legal: `${baseClass}__legal`
}

export default function Explanation ({
  className,
  content,
  legal,
  title,
  styles
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <Block.Plain className={classNames(baseClass, className)}>
      <Title.Primary
        className={classNames(classes.title)}>
        {title}
      </Title.Primary>

      <Paragraph.Primary
        className={classNames(classes.content)}>
        {content}
      </Paragraph.Primary>

      <Paragraph.Legal className={classNames(classes.legal)}>
        {legal}
      </Paragraph.Legal>
    </Block.Plain>
  )
}
