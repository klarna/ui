import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Dialog from '../../Dialog'
import Fieldset from '../../Fieldset'
import Input from '../../Input'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import * as Selector from '../../Selector'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import defaultStyles from './styles.scss'

const baseClass = 'filtered-selection'

const classes = {
  title: `${baseClass}__title`,
  summary: `${baseClass}__summary`,
  input: `${baseClass}__input`,
  selector: `${baseClass}__selector`
}

function FilteredSelection ({
  alternative,
  className,
  focus,
  label,
  onAlternative,
  onBlur,
  onChange,
  onFocus,
  onSelect,
  options,
  summary,
  title,
  value,
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

    <Fieldset className={classNames(classes.input)}>
      <Input
        focus={focus}
        icon='search'
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
    </Fieldset>

    <Selector.Direct
      className={classNames(classes.selector)}
      name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
      onSelect={onSelect}
      data={options}
    />

    <Paragraph.Primary margins>
      <Link onClick={onAlternative}>
        {alternative}
      </Link>
    </Paragraph.Primary>
  </Dialog.Content>
}

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlerName: 'onFocus',
    handlerSelector: () => true,
    resetHandlerName: 'onBlur'
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (e) => e.target.value
  })
)(FilteredSelection)
