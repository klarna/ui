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
  onSelect,
  options,
  summary,
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
      className={classNames(classes.summary)}>
      {summary}
    </Paragraph.Primary>

    <Selector.Direct
      className={classNames(classes.selector)}
      name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
      onSelect={onSelect}
      data={options}
    />
  </Dialog.Content>
}
