import React from 'react'
import Input from '../components/Input'
import UncontrolledInput from '../components/uncontrolled/Input'
import Fieldset from '../components/Fieldset'
import Code from './Code'

import { PrimaryTitle, SecondaryTitle, Subtitle } from '../components/Text'

export default function Inputs () {
  return (
    <div>

      <PrimaryTitle small blue>Sizes</PrimaryTitle>
      <SecondaryTitle>Controlled Input</SecondaryTitle>
      <Code>
        <Input name='email' label='Enter your email' />
        <Input big name='email' label='Enter your email' />
        <Input giant name='giant' label='Enter your email' />
        <Input label='Enter your email' focus />
        <Input label='Enter your email' focus='fake' />
      </Code>

      <Subtitle small blue>Types</Subtitle>
      <Code>
        <Input type='text' name='text' label='Text' />
        <Input type='password' name='password' label='Password' />
        <Input type='number' name='number' label='Number' />
        <Input type='email' name='email' label='Email' />
        <Input type='search' name='search' label='Search' />
        <Input type='url' name='url' label='URL' />
      </Code>

      <Subtitle small blue>States</Subtitle>
      <Code>
        <Input error label='Invalid email' name='email' value='invalid@' />
        <Input big error label='Invalid email' name='email' value='invalid@' />
        <Input warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Input big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Input disabled name='address' label='Address' value='16, Corn street' />
      </Code>

      <Subtitle>Stacked</Subtitle>
      <Code>
        <Fieldset>
          <Input top left size='1/2' label='Given name' />
          <Input center size='1/4' label='Middle name' />
          <Input top right size='1/4' label='Last name' />
          <Input left square size='1/5' label='Number' />
          <Input right square size='4/5' label='Street Address' />
          <Input left square size='1/3' label='Your favorite pokémon' />
          <Input right square size='2/3' label='Android or iPhone: please explain' />
          <Input left bottom size='2/5' label='Date of Birth' />
          <Input right bottom size='3/5' label='Mobile phone number' />
        </Fieldset>
      </Code>

      <SecondaryTitle>Uncontrolled Input</SecondaryTitle>
      <Code>
        <UncontrolledInput name='email' label='Enter your email' />
        <UncontrolledInput big name='email' label='Enter your email' />
        <UncontrolledInput giant name='giant' label='Enter your email' />
      </Code>

      <Subtitle small blue>Types</Subtitle>
      <Code>
        <UncontrolledInput type='text' name='text' label='Text' />
        <UncontrolledInput type='password' name='password' label='Password' />
        <UncontrolledInput type='number' name='number' label='Number' />
        <UncontrolledInput type='email' name='email' label='Email' />
        <UncontrolledInput type='search' name='search' label='Search' />
        <UncontrolledInput type='url' name='url' label='URL' />
      </Code>

      <Subtitle small blue>States</Subtitle>
      <Code>
        <UncontrolledInput error label='Invalid email' name='email' value='invalid@' />
        <UncontrolledInput big error label='Invalid email' name='email' value='invalid@' />
        <UncontrolledInput warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <UncontrolledInput big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <UncontrolledInput disabled name='address' label='Address' value='16, Corn street' />
      </Code>

      <Subtitle>Stacked</Subtitle>
      <Code>
        <Fieldset>
          <UncontrolledInput top left size='1/2' label='Given name' />
          <UncontrolledInput center size='1/4' label='Middle name' />
          <UncontrolledInput top right size='1/4' label='Last name' />
          <UncontrolledInput left square size='1/5' label='Number' />
          <UncontrolledInput right square size='4/5' label='Street Address' />
          <UncontrolledInput left square size='1/3' label='Your favorite pokémon' />
          <UncontrolledInput right square size='2/3' label='Android or iPhone: please explain' />
          <UncontrolledInput left bottom size='2/5' label='Date of Birth' />
          <UncontrolledInput right bottom size='3/5' label='Mobile phone number' />
        </Fieldset>
      </Code>

    </div>
  )
}
