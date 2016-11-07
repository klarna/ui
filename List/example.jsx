import React from 'react'
import * as List from '../List'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'List',

  variations: [
    {
      title: 'Unordered',
      require: 'import * as List from \'@klarna/ui/List\'',
      type: LIVE,

      examples: {
        Regular: <List.Unordered>
          <List.Item>
            Is this the real life?
          </List.Item>
          <List.Item>
            Is this just fantasy
          </List.Item>
          <List.Item>
            Open your eyes
          </List.Item>
        </List.Unordered>,

        Condensed: <List.Unordered>
          <List.Item condensed>
            Is this the real life?
          </List.Item>
          <List.Item condensed>
            Is this just fantasy
          </List.Item>
          <List.Item condensed>
            Open your eyes
          </List.Item>
        </List.Unordered>,

        Secondary: <List.Unordered>
          <List.Item secondary>
            Is this the real life?
          </List.Item>
          <List.Item secondary>
            Is this just fantasy
          </List.Item>
          <List.Item secondary>
            Open your eyes
          </List.Item>
        </List.Unordered>,

        Color: [
          <List.Unordered key={1}>
            <List.Item color='blue'>
              Deep as the sea
            </List.Item>
            <List.Item color='gray'>
              Light as air
            </List.Item>
            <List.Item color='error'>
              Intense as twilight sky
            </List.Item>
            <List.Item color='success'>
              Fields of emerald
            </List.Item>
            <List.Item color='warning'>
              Attention to the sun
            </List.Item>
          </List.Unordered>,
          <List.Unordered key={2} style={{background: '#0074c8'}}>
            <List.Item color='white'>
              Cold as midwinter snow
            </List.Item>
          </List.Unordered>
        ]
      }
    },

    {
      title: 'Ordered',
      require: 'import * as List from \'@klarna/ui/List\'',
      type: LIVE,

      examples: {
        Regular: <List.Ordered>
          <List.Item>
            'Twas brillig, and the slithy toves
          </List.Item>
          <List.Item>
            Did gyre and gimble in the wabe;
            <List.Ordered>
              <List.Item>
                All mimsy were the borogoves,
              </List.Item>
              <List.Item>
                And the mome raths outgrabe.
              </List.Item>
              <List.Item>
                Did gyre and gimble in the wabe;
                <List.Ordered>
                  <List.Item>
                    All mimsy were the borogoves,
                  </List.Item>
                  <List.Item>
                    And the mome raths outgrabe.
                  </List.Item>
                </List.Ordered>
              </List.Item>
            </List.Ordered>
          </List.Item>
          <List.Item>
            'Twas brillig, and the slithy toves
          </List.Item>
        </List.Ordered>,

        secondary: <List.Ordered>
          <List.Item secondary>
            'Twas brillig, and the slithy toves
          </List.Item>
          <List.Item secondary>
            Did gyre and gimble in the wabe;
            <List.Ordered>
              <List.Item secondary>
                All mimsy were the borogoves,
              </List.Item>
              <List.Item secondary>
                And the mome raths outgrabe.
              </List.Item>
            </List.Ordered>
          </List.Item>
          <List.Item secondary>
            'Twas brillig, and the slithy toves
          </List.Item>
        </List.Ordered>,

        Color: [
          <List.Ordered key={1}>
            <List.Item color='blue'>
              Deep as the sea
            </List.Item>
            <List.Item color='gray'>
              Light as air
            </List.Item>
            <List.Item color='error'>
              Intense as twilight sky
            </List.Item>
            <List.Item color='success'>
              Fields of emerald
            </List.Item>
            <List.Item color='warning'>
              Attention to the sun
            </List.Item>
          </List.Ordered>,
          <List.Ordered key={2} style={{background: '#0074c8'}}>
            <List.Item color='white'>
              Cold as midwinter snow
            </List.Item>
          </List.Ordered>
        ]
      }
    },

    {
      title: 'Iconic',
      require: 'import * as List from \'@klarna/ui/List\'',
      type: LIVE,

      examples: {
        Regular: <List.Iconic.Wrapper>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <circle
                stroke='#979797'
                fill='#D8D8D8'
                cx='30'
                cy='30'
                r='28'
              />
            </svg>}>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <polygon
                stroke='#979797'
                fill='#D8D8D8'
                points='30 46.5 12.95 55.46 16.20 36.48 2.41 23.03 21.47 20.26 30 3 38.52 20.26 57.58 23.03 43.79 36.48 47.04 55.46'
              />
            </svg>}>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <polygon
                stroke='#979797'
                fill='#D8D8D8'
                points='30 4 58 54 2 54'
              />
            </svg>}>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
        </List.Iconic.Wrapper>
      }
    }
  ]
}
