import React, {PropTypes} from 'react'
import Centered from '../chromes/Centered'
import TextLabel from '../../TextLabel'
import * as Title from '../../Title'
import defaultStyles from './styles.scss'

export default function ConfirmData ({
  accept,
  cancel,
  id,
  info,
  summary,
  title,
  ...props
}) {
  const ids = id
    ? {
      centered: `${id}__centered`,
      content: `${id}__content`,
      textLabel: index => `${id}__text-label__${index}`,
      value: index => `${id}__value__${index}`
    }
    : {
      textLabel: () => '',
      value: () => ''
    }

  return <Centered
    id={ids.centered}
    labels={{
      accept,
      cancel,
      summary,
      title
    }}
    {...props}>
    <div
      id={ids.content}
      className={defaultStyles['confirm--data__content']}>
      {info.map(({label, value}, i) => [
        <TextLabel
          id={ids.textLabel(i)}
          key={`${i}-label`}
          margins>
          {label}
        </TextLabel>,
        <Title.Secondary
          key={`${i}-value`}
          id={ids.value(i)}
          className={defaultStyles['confirm--data__value']}>
          {value}
        </Title.Secondary>
      ])}
    </div>
  </Centered>
}

ConfirmData.propTypes = {
  accept: PropTypes.string,
  cancel: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.node
    })
  ),
  summary: PropTypes.string,
  title: PropTypes.string
}
