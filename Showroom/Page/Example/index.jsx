import React from 'react'
import classNamesBind from 'classnames/bind'
import Subtitle from '../../../Subtitle'
import * as Code from '../../../Code'
import asCode from '../../../helpers/asCode'

import styles from './styles.scss'

const baseClass = 'page__example'

const classes = {
  code: `${baseClass}__code`,
  example: `${baseClass}__example`,
  heading: `${baseClass}__heading`,
  live: `${baseClass}__live`
}

export default function Example ({code, children, name, wide}) {
  const classNames = classNamesBind.bind(styles)

  return (
    <section className={classNames(baseClass)}>
      <Subtitle className={classNames(classes.heading)}>
        {name}
      </Subtitle>

      <section
        className={classNames(classes.example)}>
        <article
          className={classNames(
            classes.live,
            { wide }
          )}>
          {children}
        </article>

        <Code.Block className={classNames(classes.code)}>
          {code || asCode(children)}
        </Code.Block>

        <div style={{clear: 'both'}} />
      </section>
    </section>
  )
}
