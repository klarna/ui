import React from 'react'
import Selection from './'
import Wrapper from '../Wrapper'
import { TEMPLATE } from '../../Showroom/variationTypes'

const optionsData = [
  {key: 'lor', label: 'Lorem'},
  {key: 'ip', label: 'Ipsum'}
]

export default {
  title: 'Selection',
  examples: {
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
  }
}
