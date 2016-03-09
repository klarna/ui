import React from 'react'
import Preview, { PreviewTitle, PreviewLink } from '../components/Preview'
import Code from './Code'

export default function Previews () {
  return (
    <div>
      <h1>Preview examples</h1>

      <h3>Default</h3>
      <Code>
        <Preview>
          <PreviewTitle>John Smith</PreviewTitle>
          1425 North Avenue Street<br />
          San Francisco<br />
          94100 California<br />
          United States
        </Preview>
      </Code>

      <h3>With link</h3>
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
