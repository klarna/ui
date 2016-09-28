import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Block from '../../Block'
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
  summary,
  title,
  options,
  value,
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
        className={classNames(classes.summary)}>
        {summary}
      </Paragraph.Primary>

      <Selector.Options
        className={classNames(classes.selector)}
        name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
        onChange={onSelect}
        data={options}
        value={value}
      />
    </Block.Plain>
  )
}
