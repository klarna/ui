import React from 'react'
import Link from '../Link'
import Code from '../Code'
import { SecondaryTitle } from '../Text'

export default function Links () {
  return (
    <div>
      <SecondaryTitle>Regular</SecondaryTitle>
      <Code>
        <Link>Click me!</Link>
      </Code>

      <SecondaryTitle>Dynamic styling</SecondaryTitle>
      <Code>
        <Link customize={{ textColor: '#3500C8' }}>Click me!</Link>
      </Code>
    </div>
  )
}
