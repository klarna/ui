/* global alert */
import React from 'react'
import Field from '../Field'
import Fieldset from '../Fieldset'
import Link from '../Link'
import UncontrolledField from '../uncontrolled/Field'
import { Paragraph, Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Fields () {
  return (
    <div>
      <Paragraph.Primary margins>
        Fields are by default <Link href='https://facebook.github.io/react/docs/forms.html#controlled-components'>Controlled components</Link>, which means that the <code>onChange</code> needs to be handled for the user to be able to interact and focus needs to be set manually as a <code>prop</code>. This is the recommended approach for declarative applications, but some times it's too restrictive: for those cases, you can use an Uncontrolled version which is provided as well.
      </Paragraph.Primary>

      <Title.Primary color='blue' small margins>Regular</Title.Primary>
      <Title.Secondary margins>Normal</Title.Secondary>
      <Code>
        <Field label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledField label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Title.Secondary margins>Big</Title.Secondary>
      <Code>
        <Field label='Enter your email' big />
      </Code>

      <Title.Secondary margins>Focused</Title.Secondary>
      <Code>
        <Field label='Enter your email' focus />
      </Code>

      <Subtitle margins>Fake focused</Subtitle>
      <Code>
        <Field label='Enter your email' focus='fake' />
      </Code>

      <Title.Secondary margins>Error</Title.Secondary>
      <Code>
        <Field label='Invalid email' error value='invalid@' />
      </Code>

      <Title.Secondary margins>Warning</Title.Secondary>
      <Code>
        <Field label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
      </Code>

      <Title.Secondary margins>Disabled</Title.Secondary>
      <Code>
        <Field disabled label='Address' value='16, Corn street' />
      </Code>

      <Title.Secondary margins>Dynamic styling</Title.Secondary>
      <Code>
        <UncontrolledField customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8' }} label='Favorite color' value='Purple' />
      </Code>

      <Title.Secondary margins>Stacked</Title.Secondary>
      <Subtitle margins>Normal</Subtitle>
      <Code>
        <Fieldset margins>
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

      <Title.Primary margins small color='blue'>Types</Title.Primary>
      <Code>
        <Fieldset margins>
          <Field type='text' name='text' label='Text' />
        </Fieldset>
        <Fieldset margins>
          <Field type='password' name='password' label='Password' />
        </Fieldset>
        <Fieldset margins>
          <Field type='number' name='number' label='Number' />
        </Fieldset>
        <Fieldset margins>
          <Field type='email' name='email' label='Email' />
        </Fieldset>
        <Fieldset margins>
          <Field type='search' name='search' label='Search' />
        </Fieldset>
        <Fieldset margins>
          <Field type='url' name='url' label='URL' />
        </Fieldset>
      </Code>

      <Title.Primary margins small color='blue'>States</Title.Primary>
      <Code>
        <Fieldset margins>
          <Field error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset margins>
          <Field big error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset margins>
          <Field warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset margins>
          <Field big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset margins>
          <Field disabled name='address' label='Address' value='16, Corn street' />
        </Fieldset>
      </Code>

      <Title.Primary margins small color='blue'>Icons</Title.Primary>
      <Code>
        <Fieldset margins>
          <Field
            icon='card'
            label='Please enter your credit card number' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='calendar'
            label='Date of Birth' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='lock'
            type='password'
            label='Password' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='person'
            label='Enter your user name' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='email'
            label='Enter your email address' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='phone'
            label='Mobile number' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='close'
            label='Enter an incorrect value (?)' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='question'
            label='Are we sure about these being field icons?' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='check'
            label='These look like button icons really' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='logout'
            label='Write something to log out' />
        </Fieldset>
        <Fieldset margins>
          <Field
            icon='details'
            label='This is for writing some details here' />
        </Fieldset>
      </Code>
    </div>
  )
}
