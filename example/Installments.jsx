import React from 'react'
import InstallmentsComponent from '../components/Installments'
import { SecondaryTitle } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'installments_6', value: '$64.17/mo.', connector: 'for', info: ' 6 months' },
  { key: 'installments_12', value: '$32.09/mo.', connector: 'for', info: ' 12 months' },
  { key: 'installments_24', value: '$16.05/mo.', connector: 'for', info: ' 24 months' }
]

export default function Installments () {
  return (
    <div>
      <SecondaryTitle margins small color='blue'>Installments</SecondaryTitle>
      <Code>
        <InstallmentsComponent
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          selected='installments_12'
          options={options}
        />
      </Code>
    </div>
  )
}
