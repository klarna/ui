import React from 'react'
import Badge from '../components/Badge'
import { Paragraph } from '../components/Text'
import Code from './Code'

export default function Badges () {
  return (
    <div>
      <Code>
        <Paragraph>
          That's a very good option
          <Badge>promo</Badge>
        </Paragraph>
      </Code>
    </div>
  )
}
