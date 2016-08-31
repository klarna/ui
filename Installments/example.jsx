import React from 'react'
import InstallmentsComponent from '../Installments'
import UncontrolledInstallments from '../uncontrolled/Installments'

const options = [
  { key: 'installments_6', value: '$64.17/mo.', connector: 'for', info: ' 6 months' },
  { key: 'installments_12', value: '$32.09/mo.', connector: 'for', info: ' 12 months' },
  { key: 'installments_24', value: '$16.05/mo.', connector: 'for', info: ' 24 months' }
]

const wide = (example) => ({ example, wide: true })

export default {
  title: 'Installments',
  variations: [{
    title: 'Installments',
    Regular: wide([
      <InstallmentsComponent
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        value='installments_12'
        options={options}
      />
    ]),
    Uncontrolled: wide([
      <UncontrolledInstallments
        onChange={(key) => console.log('You selected', key)}
        name='installments2'
        value='installments_24'
        focus='installments_6'
        options={options}
      />
    ]),
    Focused: wide([
      <InstallmentsComponent
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        value='installments_12'
        focus='installments_6'
        options={options}
      />
    ])
  }]
}
