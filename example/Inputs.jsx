import React from 'react'
import Input from '../components/Input'
import Code from './Code'

import { PrimaryTitle, Subtitle } from '../components/Text'
import * as fieldIcons from '../components/icons/fieldIcons'

export default function Inputs () {
  return (
    <div>

      <PrimaryTitle small blue>Sizes</PrimaryTitle>
      <Code>
        <Input name='email' label='Enter your email' />
        <Input size='big' name='email' label='Enter your email' />
      </Code>

      <PrimaryTitle small blue>Types</PrimaryTitle>
      <Code>
        <Input type='text' name='text' label='Text' />
        <Input type='password' name='password' label='Password' />
        <Input type='number' name='number' label='Number' />
        <Input type='email' name='email' label='Email' />
        <Input type='search' name='search' label='Search' />
        <Input type='url' name='url' label='URL' />
      </Code>

      <PrimaryTitle small blue>States</PrimaryTitle>
      <Code>
        <Input error='Invalid email' name='email' value='invalid@' />
        <Input size='big' error='Invalid email' name='email' value='invalid@' />
        <Input warning='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Input size='big' warning='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Input disabled name='address' label='Address' value='16, Corn street' />
      </Code>

      <PrimaryTitle small blue>Icons</PrimaryTitle>
      {

        Object.values(fieldIcons).map((Icon) => (
          <div key={Icon.displayName}>
            <Subtitle>{Icon.displayName}</Subtitle>
            <Code key={Icon.displayName}>
              <Input name={Icon.displayName} label={Icon.displayName}>
                <Icon />
              </Input>
              <Input error={`Invalid ${Icon.displayName}`} name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Input>
              <Input warning='Are you sure?' name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Input>
              <Input disabled name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Input>
            </Code>
          </div>
        ))
      }

    </div>
  )
}
