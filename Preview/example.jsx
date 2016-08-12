import React from 'react'
import Preview, { PreviewTitle, PreviewLink } from '../Preview'
import { SecondaryTitle } from '../Text'
import Code from '../Code'

export default function Previews () {
  return (
    <div>
      <SecondaryTitle margins>Default</SecondaryTitle>
      <Code>
        <Preview>
          <PreviewTitle>John Smith</PreviewTitle>
          1425 North Avenue Street<br />
          San Francisco<br />
          94100 California<br />
          United States
        </Preview>
      </Code>

      <SecondaryTitle margins>With link</SecondaryTitle>
      <Code>
        <Preview>
          <PreviewTitle>John Smith</PreviewTitle>
          1425 North Avenue Street<br />
          San Francisco<br />
          94100 California<br />
          United States
          <PreviewLink href='#'>Change address</PreviewLink>
        </Preview>
      </Code>
    </div>
  )
}
