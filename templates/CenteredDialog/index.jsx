import React, { PropTypes } from 'react'
import childrenPropType from '../../propTypes/children'
import classNamesBind from 'classnames/bind'
import * as Dialog from '../../Dialog'
import * as Button from '../../Button'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import html2KlarnaUI from '../../html2KlarnaUI'
import Cross from '../../icons/Cross'
import defaultStyles from './styles.scss'

const baseClass = 'dialog--centered'

const classes = {
  title: `${baseClass}__title`,
  summary: `${baseClass}__summary`,
  button: `${baseClass}__button`,
  error: `${baseClass}__error`,
  errorIcon: `${baseClass}__error-icon`,
  errorParagraph: `${baseClass}__error-paragraph`,
  legalParagraph: `${baseClass}__legal-paragraph`
}

function CenteredDialog ({
  id,
  className,
  illustration,
  title,
  summary,
  children,
  actions,
  error,
  legal,
  styles
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  const ids = id
    ? {
      dialogContent: `${id}__dialog-content`,
      title: `${id}__title`,
      summary: `${id}__summary`,
      errorBlock: `${id}__error-block`,
      errorParagraph: `${id}__error-paragraph`,
      errorIcon: `${id}__error-icon`,
      legal: `${id}__legal`
    } : {}

  return (
    <Dialog.Content
      id={ids.dialogContent}
      className={classNames(baseClass, className)}>

      {illustration}

      {title &&
        <Title.Primary
          id={ids.title}
          className={classNames(classes.title)}>
          {title}
        </Title.Primary>
      }

      {summary &&
        <Paragraph.Secondary
          id={ids.summary}
          className={classNames(classes.summary)}>
          {html2KlarnaUI(summary)}
        </Paragraph.Secondary>
      }

      {children}

      {actions.length > 0 &&
        <ActionGenerator
          classNames={classNames}
          actions={actions}
        />
      }

      {error &&
        <div
          id={ids.errorBlock}
          className={classNames(classes.error)}>
          <Paragraph.Primary
            id={ids.errorParagraph}
            className={classNames(classes.errorParagraph)}
            color='error'>
            <Cross
              id={ids.errorIcon}
              className={classNames(classes.errorIcon)}
              color='error'
            />
            {error}
          </Paragraph.Primary>
        </div>
      }

      {legal &&
        <Paragraph.Legal
          id={ids.legal}
          className={classNames(classes.legalParagraph)}>
          {legal}
        </Paragraph.Legal>
      }
    </Dialog.Content>
  )
}

CenteredDialog.defaultProps = {
  actions: []
}

CenteredDialog.propTypes = {
  id: PropTypes.string.isRequired,
  illustration: PropTypes.object,
  title: PropTypes.string,
  summary: PropTypes.string,
  children: childrenPropType,
  actions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    label: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string
  }))
}

export default CenteredDialog

const ActionGenerator = ({actions, classNames}) => {
  return (
    <div>
      {actions.map(action => {
        const key = `${action.id}.${action.type || 'action'}`
        return (
          <ButtonGenerator
            key={key}
            classNames={classNames}
            {...action}
          />
        )
      })}
    </div>
  )
}

const ButtonGenerator = ({type, label, classNames, ...remainingProps}) => {
  switch (type) {
    case 'primary':
      return (
        <Button.Primary
          className={classNames(classes.button)}
          {...remainingProps}>
          {label}
        </Button.Primary>
      )
    case 'secondary':
      return (
        <Button.Secondary
          className={classNames(classes.button)}
          {...remainingProps}>
          {label}
        </Button.Secondary>
      )
    default:
      return (
        <Button.Tertiary
          className={classNames(classes.button)}
          {...remainingProps}>
          {label}
        </Button.Tertiary>
      )
  }
}
