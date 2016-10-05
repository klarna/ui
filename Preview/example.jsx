import React from 'react'
import * as Preview from '../Preview'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Preview',
  icon: 'Preview',

  examples: {
    require: 'import * as Preview from \'@klarna/ui/Preview\'',
    type: LIVE,

    examples: {
      Regular: <Preview.Main>
        <Preview.Title>John Smith</Preview.Title>
        <Preview.Content>
          1425 North Avenue Street<br />
          San Francisco<br />
          94100 California<br />
          United States
        </Preview.Content>
      </Preview.Main>,

      'With Link': <Preview.Main
        onClick={() => console.log('You clicked the address')}>
        <Preview.Title>John Smith</Preview.Title>
        <Preview.Content>
          1425 North Avenue Street<br />
          San Francisco<br />
          94100 California<br />
          United States
        </Preview.Content>
        <Preview.Link>
          Change address
        </Preview.Link>
      </Preview.Main>
    }
  }
}
