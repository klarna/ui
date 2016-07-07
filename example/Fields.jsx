/* global alert */
import React from 'react'
import Field from '../components/Field'
import Fieldset from '../components/Fieldset'
import Link from '../components/Link'
import UncontrolledField from '../components/uncontrolled/Field'
import {
  Paragraph,
  PrimaryTitle,
  SecondaryTitle,
  Subtitle
} from '../components/Text'
import Code from './Code'

export default function Fields () {
  return (
    <div>
      <Paragraph margins>
        Fields are by default <Link href='https://facebook.github.io/react/docs/forms.html#controlled-components'>Controlled components</Link>, which means that the <code>onChange</code> needs to be handled for the user to be able to interact and focus needs to be set manually as a <code>prop</code>. This is the recommended approach for declarative applications, but some times it's too restrictive: for those cases, you can use an Uncontrolled version which is provided as well.
      </Paragraph>

      <PrimaryTitle color='blue' small margins>Regular</PrimaryTitle>
      <SecondaryTitle margins>Normal</SecondaryTitle>
      <Code>
        <Field label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledField label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <SecondaryTitle margins>Big</SecondaryTitle>
      <Code>
        <Field label='Enter your email' big />
      </Code>

      <SecondaryTitle margins>Focused</SecondaryTitle>
      <Code>
        <Field label='Enter your email' focus />
      </Code>

      <Subtitle margins>Fake focused</Subtitle>
      <Code>
        <Field label='Enter your email' focus='fake' />
      </Code>

      <SecondaryTitle margins>Error</SecondaryTitle>
      <Code>
        <Field label='Invalid email' error value='invalid@' />
      </Code>

      <SecondaryTitle margins>Warning</SecondaryTitle>
      <Code>
        <Field label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
      </Code>

      <SecondaryTitle margins>Disabled</SecondaryTitle>
      <Code>
        <Field disabled label='Address' value='16, Corn street' />
      </Code>

      <SecondaryTitle margins>Dynamic styling</SecondaryTitle>
      <Code>
        <UncontrolledField customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8' }} label='Favorite color' value='Purple' />
      </Code>

      <SecondaryTitle margins>Stacked</SecondaryTitle>
      <Subtitle margins>Normal</Subtitle>
      <Code>
        <Fieldset>
          <Field top left size='1/2' label='Given name' />
          <Field center size='1/4' label='Middle name' />
          <Field top right size='1/4' label='Last name' />
          <Field left square size='1/5' label='Number' />
          <Field right square size='4/5' label='Street Address' />
          <Field left square size='1/3' label='Your favorite pokémon' />
          <Field right square size='2/3' label='Android or iPhone: please explain' />
          <Field left bottom size='2/5' label='Date of Birth' />
          <Field right bottom size='3/5' label='Mobile phone number' />
        </Fieldset>
      </Code>

      <PrimaryTitle margins small color='blue'>Types</PrimaryTitle>
      <Code>
        <Fieldset>
          <Field type='text' name='text' label='Text' />
        </Fieldset>
        <Fieldset>
          <Field type='password' name='password' label='Password' />
        </Fieldset>
        <Fieldset>
          <Field type='number' name='number' label='Number' />
        </Fieldset>
        <Fieldset>
          <Field type='email' name='email' label='Email' />
        </Fieldset>
        <Fieldset>
          <Field type='search' name='search' label='Search' />
        </Fieldset>
        <Fieldset>
          <Field type='url' name='url' label='URL' />
        </Fieldset>
      </Code>

      <PrimaryTitle margins small color='blue'>States</PrimaryTitle>
      <Code>
        <Fieldset>
          <Field error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset>
          <Field big error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset>
          <Field warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset>
          <Field big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset>
          <Field disabled name='address' label='Address' value='16, Corn street' />
        </Fieldset>
      </Code>

      <PrimaryTitle margins small color='blue'>Icons</PrimaryTitle>
      <Code>
        <Fieldset>
          <Field
            icon='card'
            label='Please enter your credit card number' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='calendar'
            label='Date of Birth' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='lock'
            type='password'
            label='Password' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='person'
            label='Enter your user name' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='email'
            label='Enter your email address' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='phone'
            label='Mobile number' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='close'
            label='Enter an incorrect value (?)' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='question'
            label='Are we sure about these being field icons?' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='check'
            label='These look like button icons really' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='logout'
            label='Write something to log out' />
        </Fieldset>
        <Fieldset>
          <Field
            icon='details'
            label='This is for writing some details here' />
        </Fieldset>
      </Code>
    </div>
  )
}
