import React from 'react'
import Menu from '../components/Menu'
import { PrimaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

export default function Menus () {
  return (
    <div>
      <PrimaryTitle small blue>Tabs</PrimaryTitle>

      <Subtitle>Fluid</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          onChange={(key) => console.log('You selected', key)}
          name='tab-menu-fluid'
          selected='home'
          options={options}
        />
      </Code>

      <Subtitle>Static</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='tab-menu-static'
          selected='home'
          options={options} />
      </Code>

      <PrimaryTitle small blue>Segmented</PrimaryTitle>

      <Subtitle>Fluid</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          design='segmented'
          onChange={(key) => console.log('You selected', key)}
          name='segmented-fluid'
          selected='home'
          options={options}
        />
      </Code>

      <Subtitle>Static</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          design='segmented'
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='segmented-static'
          selected='home'
          options={options} />
      </Code>

    </div>
  )
}

