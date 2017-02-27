import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Button from '../../../Button'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import Cross from '../../../icons/Cross'
import Link from '../../../Link'
import defaultStyles from './styles.scss'
import defaultStylesJS from './styles'

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
  smallTitle,
  children,
  error,
  labels,
  id,
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
  const ids = id
    ? {
      dialogContent: `${id}__dialog-content`,
      title: `${id}__title`,
      paragraph: index => `${id}__paragraph__${index}`,
      accept: `${id}__accept`,
      cancel: `${id}__cancel`,
      errorBlock: `${id}__error-block`,
      errorParagraph: `${id}__error-paragraph`,
      errorIcon: `${id}__error-icon`,
      legal: `${id}__legal`
    } : {
      paragraph: () => ''
    }

  return <div
    id={ids.dialogContent}
    style={{
      ...defaultStylesJS.base.main
    }}>
    {illustration}

    <Title.Primary
      id={ids.title}
      className={classNames(classes.title)}
      small={smallTitle}>
      {labels.title}
    </Title.Primary>

    {labels.summary && paragraphs.map((text, index) => (<Paragraph.Secondary
      key={index}
      id={ids.paragraph(index)}
      className={classNames(classes.paragraphPrimary)}>
      {text}
    </Paragraph.Secondary>))}

    {children}

    {labels.accept && onAccept && <Button.Primary
      id={ids.accept}
      brandVolume={brandVolume}
      onClick={onAccept}
      loading={loading}
      className={classNames(classes.buttonAccept)}>
      {labels.accept}
    </Button.Primary>}

    {labels.cancel && onCancel && <Paragraph.Primary
      id={ids.cancel}
      className={classNames(classes.buttonCancel)}>
      <Link onClick={onCancel}>
        {labels.cancel}
      </Link>
    </Paragraph.Primary>}

    {error && <div
      id={ids.errorBlock}
      className={classNames(classes.error)}>
      <Paragraph.Primary
        id={ids.errorParagraph}
        className={classNames(classes.errorParagraph)}
        color='error'>
        <Cross
          className={classNames(classes.errorIcon)}
          color='error'
          id={ids.errorIcon}
        />
        {error}
      </Paragraph.Primary>
    </div>}

    {labels.legal && <Paragraph.Legal
      id={ids.legal}
      className={classNames(classes.legal)}>
      {labels.legal}
    </Paragraph.Legal>}
  </div>
}
