import React from 'react'
import * as Selector from '../Selector'
import Fieldset from '../Fieldset'
import {icons} from '../Input'
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
      require: 'import * as Selector from \'@klarna/ui/Selector\'',
      type: LIVE,

      examples: {
        Regular: (
          <Selector.Options
            data={optionsData}
            defaultValue={1}
            onChange={(value) => console.log('You selected', value)}
          />
        ),

        Controlled: (
          <Selector.Options
            data={optionsData}
            focus={2}
            name='selector'
            onChange={(value) => console.log('You selected', value)}
            value={1}
          />
        )
      }
    },

    {
      title: 'Direct Selector',
      require: 'import * as Selector from \'@klarna/ui/Selector\'',
      type: LIVE,

      examples: {
        Regular: (
          <Selector.Direct
            data={directData}
            onSelect={(v) => (v)}
          />
        )
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
            onClick={(e) => console.info('it was clicked', e)}
            link='Select'
            label='Organization type'
          />
          <Selector.Input
            onClick={(e) => console.info('click event disabled', e)}
            label='Organization type'
            link='Select'
            value='Standard Organization'
            disabled
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
