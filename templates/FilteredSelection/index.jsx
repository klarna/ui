import React from 'react'
import classNamesBind from 'classnames/bind'
import Fieldset from '../../Fieldset'
import Input from '../../Input'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import * as Selector from '../../Selector'
import defaultStyles from './styles.scss'

import compose from 'ramda/src/compose'
import {uncontrolled} from '@klarna/higher-order-components'

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
  id,
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
  const ids = id
    ? {
      dialogContent: `${id}__dialog-content`,
      title: `${id}__title`,
      summary: `${id}__summary`,
      fieldset: `${id}__fieldset`,
      input: `${id}__input`,
      selectorDirect: `${id}__selector-direct`,
      alternativeWrapper: `${id}__alternative-wrapper`,
      alternativeLink: `${id}__alternative-link`
    }
    : {}

  return <div
    id={ids.dialogContent}
    {...props}>
    <Title.Primary
      id={ids.title}
      className={classNames(classes.title)}>
      {title}
    </Title.Primary>

    <Paragraph.Secondary
      id={ids.summary}
      className={classNames(classes.summary)}>
      {summary}
    </Paragraph.Secondary>

    <Fieldset
      id={ids.fieldset}
      className={classNames(classes.input)}>
      <Input
        id={ids.input}
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
      id={ids.selectorDirect}
      className={classNames(classes.selector)}
      name={title.toLowerCase().replace(/[^a-zA-Z]/g, '')}
      onSelect={onSelect}
      data={options}
    />

    <Paragraph.Primary
      id={ids.alternativeWrapper}
      margins>
      <Link
        id={ids.alternativeLink}
        onClick={onAlternative}>
        {alternative}
      </Link>
    </Paragraph.Primary>
  </div>
}

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => value => value
    }
  })
)(FilteredSelection)
