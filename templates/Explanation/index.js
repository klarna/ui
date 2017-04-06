import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
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
  id,
  title,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  const ids = id
    ? {
      dialogContent: `${id}__dialog-content`,
      title: `${id}__title`,
      paragraph: `${id}__paragraph`,
      legal: `${id}__legal`
    }
    : {}

  return <div
    id={ids.dialogContent} {...props}>
    <Title.Primary
      id={ids.title}
      className={classNames(classes.title)}>
      {title}
    </Title.Primary>

    <Paragraph.Primary
      id={ids.paragraph}
      className={classNames(classes.content)}>
      {content}
    </Paragraph.Primary>

    <Paragraph.Legal
      id={ids.legal}
      className={classNames(classes.legal)}>
      {legal}
    </Paragraph.Legal>
  </div>
}

Explanation.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  legal: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  styles: PropTypes.object
}
