import React from 'react'
import * as Preview from '../Preview'
import { Title } from '../Text'
import Code from '../Code'

export default function Previews () {
  return (
    <div>
      <Title.Secondary margins>Default</Title.Secondary>
      <Code>
        <Preview.Main>
          <Preview.Title>John Smith</Preview.Title>
          <Preview.Content>
            1425 North Avenue Street<br />
            San Francisco<br />
            94100 California<br />
            United States
          </Preview.Content>
        </Preview.Main>
      </Code>

      <Title.Secondary margins>With link</Title.Secondary>
      <Code>
        <Preview.Main
          onClick={() => console.log('You clicked the address')}>
          <Preview.Title>John Smith</Preview.Title>
          <Preview.Content>
            1425 North Avenue Street<br />
            San Francisco<br />
            94100 California<br />
            United States
          </Preview.Content>
          <Preview.Link>
            Change address
          </Preview.Link>
        </Preview.Main>
      </Code>
    </div>
  )
}
