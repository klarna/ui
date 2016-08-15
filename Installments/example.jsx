import React from 'react'
import InstallmentsComponent from '../Installments'
import UncontrolledInstallments from '../uncontrolled/Installments'
import { Subtitle } from '../Text'
import Code from '../Code'

const options = [
  { key: 'installments_6', value: '$64.17/mo.', connector: 'for', info: ' 6 months' },
  { key: 'installments_12', value: '$32.09/mo.', connector: 'for', info: ' 12 months' },
  { key: 'installments_24', value: '$16.05/mo.', connector: 'for', info: ' 24 months' }
]

export default function Installments () {
  return (
    <div>
      <Subtitle margins>Regular</Subtitle>
      <Code>
        <InstallmentsComponent
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          value='installments_12'
          options={options}
        />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledInstallments
          onChange={(key) => console.log('You selected', key)}
          name='installments2'
          value='installments_24'
          options={options}
        />
      </Code>
    </div>
  )
}
