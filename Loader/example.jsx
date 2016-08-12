import React from 'react'
import Loader from '../Loader'
import { Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Loaders () {
  return (
    <div>
      <Title.Secondary color='blue' margins>Primary</Title.Secondary>
      <Code>
        <Loader size='big' />
        <Loader />
        <Loader size='small' />
        <Loader size='tiny' />
      </Code>

      <Subtitle>Inline</Subtitle>
      <Code>
        <Loader inline />
        <Loader inline />
      </Code>

      <Title.Secondary color='blue' margins>Secondary</Title.Secondary>
      <Code>
        <Loader color='blue' size='big' />
        <Loader color='blue' />
        <Loader color='blue' size='small' />
        <Loader color='blue' size='tiny' />
      </Code>

      <Title.Secondary color='blue' margins>White</Title.Secondary>
      <Code>
        <div style={{background: '#0074c8', padding: 20}}>
          <Loader color='white' size='big' />
          <Loader color='white' />
          <Loader color='white' size='small' />
          <Loader color='white' size='tiny' />
        </div>
      </Code>
    </div>
  )
}
