import React from 'react'
import CenteredSelection from '../CenteredSelection'
import FilteredSelection from '../FilteredSelection'
import Selection from '../Selection'
import Wrapper from '../Wrapper'
import DemoIcon from './DemoIcon'
import {SHOWCASE} from '../../Showroom/variationTypes'

import Lekplats from '../../Showroom/Lekplats'

import grid from '../../settings/grid'

export default {
  title: 'Selection',
  variations: [
    {
      title: 'Selection',
      type: SHOWCASE,

      example: <Lekplats
        options={[
          {
            label: 'Visible',
            name: 'visible',
            value: true
          }
        ]}>
        {({visible}) => <Wrapper
          visible={visible}
          onBack={() => console.log('welcome back')}
          onClose={() => console.log('welcome back')}>
          <Selection
            id='selection'
            title='What option do you prefer?'
            summary='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            options={[
              {key: 'lor', label: 'Lorem'},
              {key: 'ip', label: 'Ipsum'}
            ]}
            value='ip'
            onSelect={(key) => console.log('selected ' + key)}
          />
        </Wrapper>}
      </Lekplats>
    },

    {
      title: 'FilteredSelection',
      type: SHOWCASE,

      example: <Lekplats
        options={[
          {
            label: 'Visible',
            name: 'visible',
            value: true
          },
          {
            label: 'Uncontrolled',
            name: 'uncontrolled',
            value: false
          }
        ]}>
        {({uncontrolled, visible}) => {
          const filteredSelectionExample = uncontrolled
            ? <FilteredSelection
              id='filtered-selection'
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
              defaultValue='A'
            />
            : <FilteredSelection
              id='filtered-selection'
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

          return <Wrapper
            visible={visible}
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('welcome back')}>
            {filteredSelectionExample}
          </Wrapper>
        }}
      </Lekplats>
    },

    {
      title: 'CenteredSelection',
      type: SHOWCASE,

      example: <Lekplats
        options={[
          {
            label: 'Visible',
            name: 'visible',
            value: true
          }
        ]}>
        {({visible}) => <Wrapper
          visible={visible}
          onBack={() => console.log('welcome back')}
          onClose={() => console.log('welcome back')}>
          <CenteredSelection
            id='centered-selection'
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
        </Wrapper>}
      </Lekplats>
    }
  ]
}
