import React from 'react'
import * as Selector from '../Selector'
import Input from '../Input'
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
      title: 'Selector Input',
      require: 'import * as Selector from \'@klarna/ui/Selector\'',
      type: LIVE,

      examples: {
        Regular: <Selector.Input
          onClick={(e) => { console.info('it was clicked', e)}}
          label='Organization type'
        />,
        RegularValue: <Selector.Input
          onClick={(e) => { console.info('it was clicked', e)}}
          label='Organization type'
          value='This is the value'
        />,
        Big: <Selector.Input label='Organization type' big />,
        BigValue: <Selector.Input label='Organization type' big value='This is the value' />,
        Giant: <Selector.Input label='Organization type' giant />,
        GiantValue: <Selector.Input label='Organization type' giant value='This is the value' />,
        Focused: <Selector.Input label='Organization type' focus />,
        'Fake focused': <Selector.Input label='Organization type' focus='fake' />,
        Disabled: <Selector.Input disabled label='Address' />,
        DisabledValue: <Selector.Input disabled label='Address' value='16, Corn street' />,
        'Exclude Mouseflow': <Selector.Input
          mouseflowExclude
          label='Address'
          value='16, Corn street'
        />,
        'With error': <Selector.Input label='Please select an Organization type' placeholder='Organization type' error />,
        'With warning': <Selector.Input
          label='Please select another Organization type'
          warning
          value='This is the wrong type?'
        />,
        'Normal Input': <Input
          onChange={(v) => v}
          label='Organization type'
          value='This is the value'
        />,
        'Normal Input error': <Input
          onChange={(v) => v}
          error
          label='Please enter Organization type'
          placeholder='Foobar'
        />
      }
    },

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
    }
  ]
}
