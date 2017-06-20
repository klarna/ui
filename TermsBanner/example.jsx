import React from 'react'
import * as Preview from '../Preview'
import Fieldset from '../Fieldset'
import TermsBanner from '../TermsBanner'
import DemoLogo from './demoLogo'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'TermsBanner',

  examples: {
    require: `import * as TermsBanner from '@klarna/ui/TermsBanner'`,
    type: LIVE,

    examples: {
      'On Fieldset': <div>
        <Fieldset
          fields={[
            {
              name: 'firstname',
              label: 'First Name',
              size: '1/2',
              top: true,
              left: true
            },
            {
              name: 'lastname',
              label: 'Last Name',
              size: '1/2',
              top: true,
              right: true
            },
            {
              name: 'address',
              label: 'Street address',
              bottom: true
            }
          ]}
          autoFocus='lastname'
          defaultValues={{
            firstname: 'Dorothy'
          }}
          onChange={(values) => console.log('new values', values)}
                 />
        <TermsBanner id='banner' logo={<DemoLogo />} link='Terms' altLink='Privacy & Autofill' />
      </div>,
      
      'On Preview': <div>
        <Preview.Main>
          <Preview.Title>John Smith</Preview.Title>
          <Preview.Content>
            1425 North Avenue Street<br />
            San Francisco<br />
            94100 California<br />
            United States
          </Preview.Content>
        </Preview.Main>
        <TermsBanner id='banner' logo={<DemoLogo />} link='Terms' altLink='Privacy & Autofill' />
      </div>
    }
  }
}
