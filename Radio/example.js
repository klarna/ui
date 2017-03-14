import React from 'react'
import Radio from '../Radio'
import * as Paragraph from '../Paragraph'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'`,
    type: LIVE,

    examples: {
      Regular: <Radio
        name='regular'
        options={[
          {
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <Paragraph.Secondary>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
            content: <Paragraph.Secondary>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Right align': <Radio
        radioMarkRight
        name='right-align'
        options={[
          {
            description: 'Buy now and pay 3 months later',
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <Paragraph.Secondary>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
            content: <Paragraph.Secondary>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Automatic name': <Radio
        radioMarkRight
        options={[
          {
            description: 'Buy now and pay 3 months later',
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <Paragraph.Secondary>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
            content: <Paragraph.Secondary>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />
    }
  }
}
