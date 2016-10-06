import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Block from '../../../Block'
import * as Button from '../../../Button'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import defaultStyles from './styles.scss'

const baseClass = 'chrome--centered'

const classes = {
  title: `${baseClass}__title`,
  paragraphPrimary: `${baseClass}__paragraph--primary`,
  buttonAccept: `${baseClass}__button--accept`,
  legal: `${baseClass}__paragraph--legal`
}

export default function Centered ({
  className,
  children,
  labels,
  illustration,
  onAccept,
  onCancel,
  styles
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const paragraphs = labels.summary instanceof Array
    ? labels.summary
    : [labels.summary]

  return (
    <Block.Plain className={classNames(baseClass, className)}>
      {illustration}

      <Title.Primary
        className={classNames(classes.title)}>
        {labels.title}
      </Title.Primary>

      {paragraphs.map((text, index) => (<Paragraph.Secondary
        key={index}
        className={classNames(classes.paragraphPrimary)}>
        {text}
      </Paragraph.Secondary>))}

      {children}

      {labels.accept && onAccept && <Button.Primary
        onClick={onAccept}
        className={classNames(classes.buttonAccept)}>
        {labels.accept}
      </Button.Primary>}

      {labels.cancel && onCancel && <Button.Secondary onClick={onCancel}>
        {labels.cancel}
      </Button.Secondary>}

      {labels.legal && <Paragraph.Legal className={classNames(classes.legal)}>
        {labels.legal}
      </Paragraph.Legal>}
    </Block.Plain>
  )
}
