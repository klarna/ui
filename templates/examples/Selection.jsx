import React from 'react'
import CenteredSelection from '../CenteredSelection'
import FilteredSelection from '../FilteredSelection'
import Selection from '../Selection'
import Wrapper from '../Wrapper'
import DemoIcon from './DemoIcon'
import { TEMPLATE } from '../../Showroom/variationTypes'

const optionsData = [
  {key: 'lor', label: 'Lorem'},
  {key: 'ip', label: 'Ipsum'}
]

export default {
  title: 'Selection',
  variations: [
    {
      title: 'Selection',
      require: 'import Selection from \'@klarna/ui/templates/Selection\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <Selection
            title='What option do you prefer?'
            summary='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            options={optionsData}
            value='ip'
            onSelect={(key) => console.log('selected ' + key)}
          />,

          wrapper: <Wrapper>
            <Selection
              title='What option do you prefer?'
              summary='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
              options={optionsData}
              value='ip'
              onSelect={(key) => console.log('selected ' + key)}
            />
          </Wrapper>
        }
      }
    },

    {
      title: 'FilteredSelection',
      require: 'import FilteredSelection from \'@klarna/ui/templates/FilteredSelection\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <FilteredSelection
            title='Select your flavor'
            summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
            label='Start typing a flavor'
            options={[
              {key: 'chocolate', label: 'Chocolate'},
              {key: 'vanilla', label: 'Vanilla'},
              {key: 'raspberry', label: 'Raspberry'},
              {key: 'tiramisu', label: 'Tiramisu'},
              {key: 'mascarpone', label: 'Mascarpone'},
              {key: 'banana-split', label: 'Banana Split'},
              {key: 'anana', label: 'Anana'}
            ]}
            alternative='Manually enter your favorite flavor'
            onAlternative={() => console.log('alternative')}
            onChange={(e) => console.log('new value', e)}
            onSelect={(e) => console.log('selection', e)}
            value='A'
          />
        },

        'Uncontrolled': {
          inline: <FilteredSelection
            title='Select your flavor'
            summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
            label='Start typing a flavor'
            options={[
              {key: 'chocolate', label: 'Chocolate'},
              {key: 'vanilla', label: 'Vanilla'},
              {key: 'raspberry', label: 'Raspberry'},
              {key: 'tiramisu', label: 'Tiramisu'},
              {key: 'mascarpone', label: 'Mascarpone'},
              {key: 'banana-split', label: 'Banana Split'}
            ]}
            alternative='Manually enter your favorite flavor'
            onAlternative={() => console.log('alternative')}
            onChange={(e) => console.log('new value', e)}
            onSelect={(e) => console.log('selection', e)}
          />
        }
      }
    },

    {
      title: 'CenteredSelection',
      require: 'import CenteredSelection from \'@klarna/ui/templates/CenteredSelection\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <CenteredSelection
            illustration={<DemoIcon />}
            title='Select your flavor'
            summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
            options={[
              {
                key: 'chocolate',
                description: 'Chocolate ice cream with cookies & swirls of pudding ice cream',
                label: 'Chocolate'
              },
              {
                key: 'vanilla',
                description: 'Dark caramel & vanilla ice creams with cookies & butter swirl',
                label: 'Vanilla'
              }
            ]}
            onSelect={(key) => console.log('selected ' + key)}
          />
        }
      }
    }
  ]
}
