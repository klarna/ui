import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Dialog from '../../Dialog'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import * as Selector from '../../Selector'
import defaultStyles from './styles.scss'

const baseClass = 'selection'

const classes = {
  title: `${baseClass}__title`,
  summary: `${baseClass}__summary`,
  selector: `${baseClass}__selector`
}

export default function Selection ({
  className,
  id,
  onSelect,
  options,
  summary,
  title,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      dialogContent: `${id}__dialog-content`,
      title: `${id}__title`,
      summary: `${id}__summary`,
      selectorDirect: `${id}__selector-direct`
    }
    : {}

  return <Dialog.Content
    id={ids.dialogContent}
    className={classNames(baseClass, className)}
    {...props}>
    <Title.Primary
      id={ids.title}
      className={classNames(classes.title)}>
      {title}
    </Title.Primary>

    <Paragraph.Primary
      id={ids.summary}
      className={classNames(classes.summary)}>
      {summary}
    </Paragraph.Primary>

    <Selector.Direct
      id={ids.selectorDirect}
      className={classNames(classes.selector)}
      name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
      onSelect={onSelect}
      data={options}
    />
  </Dialog.Content>
}
