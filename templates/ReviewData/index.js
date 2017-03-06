import React, {PropTypes} from 'react'
import * as Paragraph from '../../Paragraph'
import TextLabel from '../../TextLabel'
import * as Title from '../../Title'
import Centered from '../chromes/Centered'
import defaultStyles from './styles.scss'

export default function ReviewData ({
  accept,
  info,
  legal,
  onAccept,
  summary,
  title,
  ...props
}) {
  return <Centered
    labels={{
      accept,
      summary,
      title
    }}
    onAccept={onAccept}
    {...props}>
    <div className={defaultStyles['review-data__content']}>
      {info.map(({label, value}, index) => <div
        className={defaultStyles['review-data__content__item']}
        key={index}>
        <TextLabel>{label}</TextLabel>
        <Title.Secondary>{value}</Title.Secondary>
      </div>)}
    </div>

    <Paragraph.Legal className={defaultStyles['review-data__legal']}>
      {legal}
    </Paragraph.Legal>
  </Centered>
}

ReviewData.propTypes = {
  accept: PropTypes.string,
  info: PropTypes.string,
  legal: PropTypes.string,
  onAccept: PropTypes.func,
  summary: PropTypes.string,
  title: PropTypes.string
}
