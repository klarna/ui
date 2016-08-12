import React from 'react'
import Link from '../Link'
import Code from '../Code'
import { Title } from '../Text'

export default function Links () {
  return (
    <div>
      <Title.Secondary margins>Regular</Title.Secondary>
      <Code>
        <Link>Click me!</Link>
      </Code>

      <Title.Secondary margins>Dynamic styling</Title.Secondary>
      <Code>
        <Link customize={{ textColor: '#3500C8' }}>Click me!</Link>
      </Code>
    </div>
  )
}
