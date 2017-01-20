import React from 'react'
import * as Selector from '../Selector'
import Input, { icons } from '../Input'
import Fieldset from '../Fieldset'
import UncontrolledSelector from '../uncontrolled/Selector'
import { LIVE } from '../Showroom/variationTypes'

const optionsData = [
  {key: 1, label: 'Lorem'},
  {key: 2, label: 'Ipsum'}
]

const directData = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Selector',
  icon: 'Baseline',

  variations: [
    {
      title: 'Options Selector',
      require: `import * as Selector from '@klarna/ui/Selector'
import UncontrolledSelector from '@klarna/ui/uncontrolled/Selector'`,
      type: LIVE,

      examples: {
        Regular: <Selector.Options
          value={1}
          name='selector'
          data={optionsData}
        />,

        Uncontrolled: <UncontrolledSelector
          name='selector-uncontrolled'
          data={optionsData}
        />,

        Focus: <Selector.Options
          focus={2}
          name='selector-focus'
          data={optionsData}
        />
      }
    },

    {
      title: 'Direct Selector',
      require: 'import * as Selector from \'@klarna/ui/Selector\'',
      type: LIVE,

      examples: {
        Regular: <Selector.Direct
          data={directData}
          onSelect={(v) => (v)}
        />
      }
    },

    {
      title: 'Selector Input',
      require: `import Fieldset from '@klarna/ui/Fieldset'
import * as Selector from '@klarna/ui/Selector'`,
      type: LIVE,

      examples: {
        Variations: <Fieldset margins>
          <Selector.Input
            onClick={(e) => { console.info('it was clicked', e) }}
            link='Select'
            label='Organization type'
          />
          <Selector.Input
            label='Organization type'
            link='Select'
            value='Standard Organization'
          />
          <Selector.Input
            error
            label='Please select an organization type'
            link='Select'
            placeholder='Organization type'
          />
          <Selector.Input
            icon={icons.BANK}
            label='Organization type'
            link='Select'
          />
          <Selector.Input
            icon={icons.BANK}
            error
            label='Please select an organization type'
            link='Select'
            placeholder='Organization type'
          />
        </Fieldset>
      }
    }
  ]
}
