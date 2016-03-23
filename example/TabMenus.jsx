import React from 'react'
import TabMenu from '../components/TabMenu'
import { Subtitle, Paragraph } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'test', label: 'This is a really long' },
  { key: 'archive', label: 'Archive' }
]

export default function TabMenus () {
  return (
    <div>
      <Subtitle>Fluid</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <TabMenu
          onChange={(key) => console.log('You selected', key)}
          design='fluid'
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
        <TabMenu
          onChange={(key) => console.log('You selected', key)}
          design='static'
          name='tab-menu-static'
          selected='home'
          options={options} />
      </Code>
    </div>
  )
}
