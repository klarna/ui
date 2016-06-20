import React from 'react'
import Loader from '../components/Loader'
import { SecondaryTitle } from '../components/Text'
import Code from './Code'

export default function Loaders () {
  return (
    <div>
      <SecondaryTitle color='blue' margins>Primary</SecondaryTitle>
      <Code>
        <Loader size='big' />
        <Loader />
        <Loader size='small' />
        <Loader size='tiny' />
      </Code>

      <SecondaryTitle color='blue' margins>Secondary</SecondaryTitle>
      <Code>
        <Loader color='blue' size='big' />
        <Loader color='blue' />
        <Loader color='blue' size='small' />
        <Loader color='blue' size='tiny' />
      </Code>

      <SecondaryTitle color='blue' margins>White</SecondaryTitle>
      <Code>
        <div style={{background: '#0074c8'}}>
          <Loader color='white' size='big' />
          <Loader color='white' />
          <Loader color='white' size='small' />
          <Loader color='white' size='tiny' />
        </div>
      </Code>
    </div>
  )
}
