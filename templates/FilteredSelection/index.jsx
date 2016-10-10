import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Block from '../../Block'
import Fieldset from '../../Fieldset'
import Input from '../../Input'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import * as Selector from '../../Selector'
import defaultStyles from './styles.scss'

const baseClass = 'filtered-selection'

const classes = {
  title: `${baseClass}__title`,
  summary: `${baseClass}__summary`,
  selector: `${baseClass}__selector`
}

export default function Selection ({
  alternative,
  className,
  label,
  onAlternative,
  onChange,
  onSelect,
  options,
  summary,
  title,
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

      <Fieldset margins>
        <Input
          centered
          icon='search'
          label={label}
          onChange={onChange}
          value={value}
        />
      </Fieldset>

      <Selector.Options
        className={classNames(classes.selector)}
        name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
        onChange={onSelect}
        data={options}
      />

      <Paragraph.Primary margins>
        <Link onClick={onAlternative}>
          {alternative}
        </Link>
      </Paragraph.Primary>
    </Block.Plain>
  )
}
