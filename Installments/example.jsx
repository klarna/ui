import React from 'react'
import InstallmentsComponent from '../Installments'
import UncontrolledInstallments from '../uncontrolled/Installments'
import { LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', content: <div>Long one line text in div</div> },
  { key: 'installments_6', content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>] },
  { key: 'installments_12', content: 'Simple text content' },
  { key: 'installments_24', content: <div><div>Force</div><div>new line</div></div> }
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
