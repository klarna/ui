import React from 'react'
import * as Menu from '../Menu'
import * as UncontrolledMenu from '../uncontrolled/Menu'
import Label from '../Label'
import * as Block from '../Block'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

const optionsWithComponents = [
  { key: 'home', label: <div>Home</div> },
  { key: 'faq', label: <div>To do <Label design='warning'>urgent</Label></div> }
]

const wide = (example) => ({
  example,
  wide: true
})

export default {
  title: 'Menu',
  icon: 'Navigation',
  variations: [{
    title: 'Tabs',
    require: `import * as Menu from '@klarna/ui/Menu'`,
    Fluid: wide([
      <Menu.Tab
        onChange={(key) => console.log('You selected', key)}
        tabDisplay='fluid'
        name='tab-fluid'
        value='home'
        options={options}
      />
    ]),
    Static: wide([
      <Menu.Tab
        onChange={(key) => console.log('You selected', key)}
        tabDisplay='static'
        name='tab-static'
        value='home'
        options={options} />
    ]),
    Uncontrolled: wide([
      <UncontrolledMenu.Tab
        name='uncontrolled-tab'
        tabDisplay='fluid'
        value='home'
        options={options}
      />
    ]),
    White: wide([
      <Block.Plain blue>
        <Menu.Tab
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='tab-static-white'
          value='home'
          white
          options={options}
        />
      </Block.Plain>
    ]),
    'With components as labels': wide([
      <Menu.Tab
        onChange={(key) => console.log('You selected', key)}
        tabDisplay='static'
        name='options-with-components'
        value='home'
        options={optionsWithComponents}
      />
    ])
  }, {
    title: 'Segmented',
    require: `import * as Menu from '@klarna/ui/Menu'`,
    Fluid: wide([
      <Menu.Segmented
        onChange={(key) => console.log('You selected', key)}
        name='segmented-fluid'
        value='home'
        options={options}
      />
    ]),
    Static: wide([
      <Menu.Segmented
        onChange={(key) => console.log('You selected', key)}
        tabDisplay='static'
        name='segmented-static'
        focus='faq'
        value='home'
        options={options}
      />
    ]),
    Uncontrolled: wide([
      <UncontrolledMenu.Segmented
        name='uncontrolled-segmented'
        focus='faq'
        value='home'
        options={options}
      />
    ])
  }]
}
