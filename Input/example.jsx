/* global alert */
import React from 'react'
import Input from '../Input'
import UncontrolledInput from '../uncontrolled/Input'
import Fieldset from '../Fieldset'
import Link from '../Link'
import { Paragraph, Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Inputs () {
  return (
    <div>
      <Paragraph.Primary margins>
        Inputs are by default <Link href='https://facebook.github.io/react/docs/forms.html#controlled-components'>Controlled components</Link>, which means that the <code>onChange</code> needs to be handled for the user to be able to interact and focus needs to be set manually as a <code>prop</code>. This is the recommended approach for declarative applications, but some times it's too restrictive: for those cases, you can use an Uncontrolled version which is provided as well.
      </Paragraph.Primary>

      <Title.Primary color='blue' small margins>Regular</Title.Primary>
      <Title.Secondary margins>Normal</Title.Secondary>
      <Code>
        <Input label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledInput label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <Title.Secondary margins>Big</Title.Secondary>
      <Code>
        <Input label='Enter your email' big />
      </Code>

      <Title.Secondary margins>Giant</Title.Secondary>
      <Code>
        <Input label='Enter your email' big />
      </Code>

      <Title.Secondary margins>Focused</Title.Secondary>
      <Code>
        <Input label='Enter your email' focus />
      </Code>

      <Subtitle margins>Fake focused</Subtitle>
      <Code>
        <Input label='Enter your email' focus='fake' />
      </Code>

      <Title.Secondary margins>Error</Title.Secondary>
      <Code>
        <Input label='Invalid email' error value='invalid@' />
      </Code>

      <Title.Secondary margins>Warning</Title.Secondary>
      <Code>
        <Input label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
      </Code>

      <Title.Secondary margins>Disabled</Title.Secondary>
      <Code>
        <Input disabled label='Address' value='16, Corn street' />
      </Code>

      <Subtitle>Stacked</Subtitle>
      <Code>
        <Fieldset margins>
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

      <Title.Primary margins small color='blue'>Types</Title.Primary>
      <Code>
        <Fieldset margins>
          <Input type='text' name='text' label='Text' />
        </Fieldset>
        <Fieldset margins>
          <Input type='password' name='password' label='Password' />
        </Fieldset>
        <Fieldset margins>
          <Input type='number' name='number' label='Number' />
        </Fieldset>
        <Fieldset margins>
          <Input type='email' name='email' label='Email' />
        </Fieldset>
        <Fieldset margins>
          <Input type='search' name='search' label='Search' />
        </Fieldset>
        <Fieldset margins>
          <Input type='url' name='url' label='URL' />
        </Fieldset>
      </Code>

      <Title.Primary margins small color='blue'>States</Title.Primary>
      <Code>
        <Fieldset margins>
          <Input error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset margins>
          <Input big error label='Invalid email' name='email' value='invalid@' />
        </Fieldset>
        <Fieldset margins>
          <Input warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset margins>
          <Input big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        </Fieldset>
        <Fieldset margins>
          <Input disabled name='address' label='Address' value='16, Corn street' />
        </Fieldset>
      </Code>

      <Title.Primary margins small color='blue'>Icons</Title.Primary>
      <Code>
        <Fieldset margins>
          <UncontrolledInput
            icon='card'
            label='Please enter your credit card number' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='calendar'
            label='Date of Birth' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='lock'
            type='password'
            label='Password' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='person'
            label='Enter your user name' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='email'
            label='Enter your email address' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='phone'
            label='Mobile number' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='close'
            label='Enter an incorrect value (?)' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='question'
            label='Are we sure about these being field icons?' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='check'
            label='These look like button icons really' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            icon='logout'
            label='Write something to log out' />
        </Fieldset>
        <Fieldset margins>
          <UncontrolledInput
            giant
            icon='phone'
            label='Line number' />
        </Fieldset>
      </Code>
    </div>
  )
}
