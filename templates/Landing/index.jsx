import React from 'react'
import * as Block from '../../Block'
import * as Button from '../../Button'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import defaultStyles from './styles.scss'

export default function Landing ({ labels, illustration, onAccept, onCancel }) {
  return (
    <Block.Plain className={defaultStyles.landing}>
      {illustration}

      <Title.Primary
        className={defaultStyles.landing__title}>
        {labels.title}
      </Title.Primary>

      <Paragraph.Secondary
        className={defaultStyles.landing__paragraph}>
        {labels.summary}
      </Paragraph.Secondary>

      <Button.Primary
        onClick={onAccept}
        className={defaultStyles['landing__button--accept']}>
        {labels.accept}
      </Button.Primary>

      <Button.Secondary onClick={onCancel}>
        {labels.cancel}
      </Button.Secondary>
    </Block.Plain>
  )
}
