import React from 'react'
import * as Selector from '../Selector'
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
    }
  ]
}
