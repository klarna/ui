import React from 'react'
import Link from '../components/Link'
import { PrimaryTitle, Subtitle } from '../components/Text'
import Code from './Code'

export default function Links () {
  return (
    <div>
      <PrimaryTitle>Link</PrimaryTitle>

      <Subtitle>Regular</Subtitle>
      <Code>
        <Link>Click me!</Link>
      </Code>

    </div>
  )
}
