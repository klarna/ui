import React from 'react'
import Centered from '../chromes/Centered'
import TextLabel from '../../TextLabel'
import * as Title from '../../Title'
import defaultStyles from './styles.scss'

export default function ConfirmData ({
  accept,
  cancel,
  info,
  summary,
  title,
  ...props
}) {
  return <Centered
    labels={{
      accept,
      cancel,
      summary,
      title
    }}
    {...props}>
    <div className={defaultStyles['confirm--data__content']}>
      {info.map(({label, value}, i) => [
        <TextLabel key={`${i}-label`} margins>
          {label}
        </TextLabel>,
        <Title.Secondary key={`${i}-value`}>
          {value}
        </Title.Secondary>
      ])}
    </div>
  </Centered>
}
