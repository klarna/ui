import React from 'react'
import * as Menu from '../Menu'
import * as UncontrolledMenu from '../uncontrolled/Menu'
import Label from '../Label'
import { Title, Subtitle, Paragraph } from '../Text'
import Code from '../Code'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

const optionsWithComponents = [
  { key: 'home', label: <div>Home</div> },
  { key: 'faq', label: <div>To do <Label design='warning'>urgent</Label></div> }
]

export default function Menus () {
  return (
    <div>
      <Title.Secondary margins color='blue'>Tabs</Title.Secondary>
      <Subtitle margins>Fluid</Subtitle>
      <Paragraph.Primary margins>
        Click and check your console.
      </Paragraph.Primary>
      <Code>
        <Menu.Tab
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='fluid'
          name='tab-fluid'
          value='home'
          options={options} />
      </Code>

      <Subtitle margins>Static</Subtitle>
      <Paragraph.Primary margins>
        Click and check your console.
      </Paragraph.Primary>
      <Code>
        <Menu.Tab
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='tab-static'
          value='home'
          options={options} />
      </Code>

      <Subtitle margins>White</Subtitle>
      <Paragraph.Primary margins>
        Click and check your console.
      </Paragraph.Primary>
      <Code>
        <div style={{background: '#0074c8', padding: '20px'}}>
          <Menu.Tab
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            name='tab-static-white'
            value='home'
            white
            options={options} />
        </div>
      </Code>

      <Subtitle margins>Options with components</Subtitle>
      <Paragraph.Primary margins>
        Options also support components as labels.
      </Paragraph.Primary>
      <Code>
        <Menu.Tab
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='options-with-components'
          value='home'
          options={optionsWithComponents} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledMenu.Tab
          name='uncontrolled-tab'
          tabDisplay='fluid'
          value='home'
          options={options} />
      </Code>

      <Title.Secondary margins color='blue'>Segmented</Title.Secondary>
      <Subtitle margins>Fluid</Subtitle>
      <Paragraph.Primary margins>
        Click and check your console.
      </Paragraph.Primary>
      <Code>
        <Menu.Segmented
          onChange={(key) => console.log('You selected', key)}
          name='segmented-fluid'
          value='home'
          options={options} />
      </Code>

      <Subtitle margins>Static</Subtitle>
      <Paragraph.Primary margins>
        Click and check your console.
      </Paragraph.Primary>
      <Code>
        <Menu.Segmented
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='segmented-static'
          focus='faq'
          value='home'
          options={options} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledMenu.Segmented
          name='uncontrolled-segmented'
          focus='faq'
          value='home'
          options={options} />
      </Code>
    </div>
  )
}
