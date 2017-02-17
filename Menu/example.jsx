import React from 'react'
import * as Menu from '../Menu'
import Label from '../Label'
import * as Block from '../Block'
import { LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

const optionsWithComponents = [
  { key: 'home', label: <div>Home</div> },
  { key: 'faq', label: <div>To do <Label design='warning'>urgent</Label></div> }
]

export default {
  title: 'Menu',
  icon: 'Navigation',

  variations: [
    {
      title: 'Tabs',
      require: 'import * as Menu from \'@klarna/ui/Menu\'',
      type: LIVE_WIDE,

      examples: {
        Fluid: (
          <Menu.Tab
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='fluid'
            defaultValue='home'
            options={options}
          />
        ),

        Static: (
          <Menu.Tab
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            defaultValue='home'
            options={options}
          />
        ),

        Controlled: (
          <Menu.Tab
            name='tab'
            tabDisplay='fluid'
            focus='faq'
            value='home'
            options={options}
          />
        ),

        White: <Block.Plain blue>
          <Menu.Tab
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            defaultValue='home'
            white
            options={options}
          />
        </Block.Plain>,

        'With components as labels': <Menu.Tab
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          defaultValue='home'
          options={optionsWithComponents}
        />
      }
    },

    {
      title: 'Segmented',
      require: 'import * as Menu from \'@klarna/ui/Menu\'',
      type: LIVE_WIDE,

      examples: {
        Fluid: (
          <Menu.Segmented
            onChange={(key) => console.log('You selected', key)}
            defaultValue='home'
            options={options}
          />
        ),

        Static: (
          <Menu.Segmented
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            defaultValue='home'
            options={options}
          />
        ),

        Controlled: (
          <Menu.Segmented
            name='segmented'
            focus='faq'
            value='home'
            options={options}
          />
        )
      }
    }
  ]
}
