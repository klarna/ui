import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Button from '../../../Button'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import Cross from '../../../icons/Cross'
import Link from '../../../Link'
import defaultStyles from './styles.scss'

const baseClass = 'chrome--centered'

const classes = {
  error: `${baseClass}__error`,
  errorIcon: `${baseClass}__error__icon`,
  errorParagraph: `${baseClass}__error__paragraph`,
  title: `${baseClass}__title`,
  paragraphPrimary: `${baseClass}__paragraph--primary`,
  buttonAccept: `${baseClass}__button--accept`,
  buttonCancel: `${baseClass}__button--cancel`,
  legal: `${baseClass}__paragraph--legal`
}

export default function Centered ({
  brandVolume,
  className,
  children,
  error,
  labels,
  illustration,
  loading,
  onAccept,
  onCancel,
  styles
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const paragraphs = labels.summary instanceof Array
    ? labels.summary
    : [labels.summary]

  return <div className={classNames(baseClass, className)}>
    {illustration}

    <Title.Primary
      className={classNames(classes.title)}>
      {labels.title}
    </Title.Primary>

    {labels.summary && paragraphs.map((text, index) => (<Paragraph.Secondary
      key={index}
      className={classNames(classes.paragraphPrimary)}>
      {text}
    </Paragraph.Secondary>))}

    {children}

    {labels.accept && onAccept && <Button.Primary
      brandVolume={brandVolume}
      onClick={onAccept}
      loading={loading}
      className={classNames(classes.buttonAccept)}>
      {labels.accept}
    </Button.Primary>}

    {labels.cancel && onCancel && <Paragraph.Primary
      className={classNames(classes.buttonCancel)}>
      <Link onClick={onCancel}>
        {labels.cancel}
      </Link>
    </Paragraph.Primary>}

    {error && <div className={classNames(classes.error)}>
      <Paragraph.Primary
        className={classNames(classes.errorParagraph)}
        color='error'>
        <Cross
          className={classNames(classes.errorIcon)}
          color='error'
        />
        {error}
      </Paragraph.Primary>
    </div>}

    {labels.legal && <Paragraph.Legal className={classNames(classes.legal)}>
      {labels.legal}
    </Paragraph.Legal>}
  </div>
}
