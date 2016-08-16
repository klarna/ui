import React from 'react'
import Code from './Code'
import { Subtitle } from '../components/Text'
import * as BlockInstallments from '../components/Block/Installments'

export default function Blocks () {
  return (
    <div>
      <Subtitle>Installments</Subtitle>
      <Code>
        <BlockInstallments.Main>
          <BlockInstallments.Title>Your Installments</BlockInstallments.Title>
          <BlockInstallments.Content>
            <BlockInstallments.Value
              title='Estimated total'
              value='€100'
            />
            <BlockInstallments.Value
              clarification='†'
              title='APR'
              value='9.99%'
            />
          </BlockInstallments.Content>
        </BlockInstallments.Main>
      </Code>
    </div>
  )
}
