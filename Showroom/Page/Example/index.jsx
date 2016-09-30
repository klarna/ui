import React from 'react'
import * as Title from '../../../Title'
import * as Code from '../../../Code'

export default function Example ({ code, children, name, wide }) {
  return (
    <section>
      <Title.Secondary margins>
        {name}
      </Title.Secondary>

      <Code.Example customCode={code}>
        {children}
      </Code.Example>
    </section>
  )
}
