import React from 'react'
import InstallmentsComponent from '../Installments'
import UncontrolledInstallments from '../uncontrolled/Installments'
import { LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', value: '$70.17/mo.', connector: ' for ', info: '3 months' },
  { key: 'installments_6', value: '$64.17/mo.', connector: ' for ', info: '6 months' },
  { key: 'installments_12', value: '$32.09/mo.', connector: ' for ', info: '12 months' },
  { key: 'installments_24', value: '$16.05/mo.', connector: ' for ', info: '24 months' }
]

export default {
  title: 'Installments',

  examples: {
    require: `import Installments from '@klarna/ui/Installments'
import UncontrolledInstallments from '@klarna/ui/uncontrolled/Installments'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <InstallmentsComponent
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        value='installments_12'
        options={options}
      />,

      Uncontrolled: <UncontrolledInstallments
        onChange={(key) => console.log('You selected', key)}
        name='installments2'
        value='installments_24'
        focus='installments_6'
        options={options}
      />,

      Focused: <InstallmentsComponent
        onChange={(key) => console.log('You selected', key)}
        name='installments3'
        value='installments_12'
        focus='installments_6'
        options={options}
      />
    }
  }
}
