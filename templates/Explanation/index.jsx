import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Dialog from '../../Dialog'
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
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <Dialog.Content
    className={classNames(baseClass, className)}
    {...props}>
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
  </Dialog.Content>
}
