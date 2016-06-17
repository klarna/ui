/* global alert */
import React from 'react'
import Input from '../components/Input'
import UncontrolledInput from '../components/uncontrolled/Input'
import Fieldset from '../components/Fieldset'
import Link from '../components/Link'
import {
  Paragraph,
  PrimaryTitle,
  SecondaryTitle,
  Subtitle
} from '../components/Text'
import Code from './Code'

export default function Inputs () {
  return (
    <div>
      <Paragraph margins>
        Inputs are by default <Link href='https://facebook.github.io/react/docs/forms.html#controlled-components'>Controlled components</Link>, which means that the <code>onChange</code> needs to be handled for the user to be able to interact and focus needs to be set manually as a <code>prop</code>. This is the recommended approach for declarative applications, but some times it's too restrictive: for those cases, you can use an Uncontrolled version which is provided as well.
      </Paragraph>

      <PrimaryTitle color='blue' small margins>Regular</PrimaryTitle>
      <SecondaryTitle margins>Normal</SecondaryTitle>
      <Code>
        <Input label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledInput label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <SecondaryTitle margins>Big</SecondaryTitle>
      <Code>
        <Input label='Enter your email' big />
      </Code>

      <SecondaryTitle margins>Giant</SecondaryTitle>
      <Code>
        <Input label='Enter your email' big />
      </Code>

      <SecondaryTitle margins>Focused</SecondaryTitle>
      <Code>
        <Input label='Enter your email' focus />
      </Code>

      <Subtitle margins>Fake focused</Subtitle>
      <Code>
        <Input label='Enter your email' focus='fake' />
      </Code>

      <SecondaryTitle margins>Error</SecondaryTitle>
      <Code>
        <Input label='Invalid email' error value='invalid@' />
      </Code>

      <SecondaryTitle margins>Warning</SecondaryTitle>
      <Code>
        <Input label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
      </Code>

      <SecondaryTitle margins>Disabled</SecondaryTitle>
      <Code>
        <Input disabled label='Address' value='16, Corn street' />
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

      <PrimaryTitle margins small color='blue'>Types</PrimaryTitle>
      <Code>
        <Fieldset>
          <Input type='text' name='text' label='Text' />
        </Fieldset>
        <Fieldset>
          <Input type='password' name='password' label='Password' />
        </Fieldset>
        <Fieldset>
          <Input type='number' name='number' label='Number' />
        </Fieldset>
        <Fieldset>
          <Input type='email' name='email' label='Email' />
        </Fieldset>
        <Fieldset>
          <Input type='search' name='search' label='Search' />
        </Fieldset>
        <Fieldset>
          <Input type='url' name='url' label='URL' />
        </Fieldset>
      </Code>

      <PrimaryTitle margins small color='blue'>States</PrimaryTitle>
      <Code>
        <Fieldset>
          <Input error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset>
          <Input big error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset>
          <Input warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset>
          <Input big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset>
          <Input disabled name='address' label='Address' value='16, Corn street' />
        </Fieldset>
      </Code>

      <PrimaryTitle margins small color='blue'>Icons</PrimaryTitle>
      <Code>
        <Fieldset>
          <Input
            icon='card'
            label='Please enter your credit card number' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='calendar'
            label='Date of Birth' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='lock'
            type='password'
            label='Password' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='person'
            label='Enter your user name' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='email'
            label='Enter your email address' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='phone'
            label='Mobile number' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='close'
            label='Enter an incorrect value (?)' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='question'
            label='Are we sure about these being field icons?' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='check'
            label='These look like button icons really' />
        </Fieldset>
        <Fieldset>
          <Input
            icon='logout'
            label='Write something to log out' />
        </Fieldset>
      </Code>
    </div>
  )
}
