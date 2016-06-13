/* global alert */
import React from 'react'
import Field from '../components/Field'
import Fieldset from '../components/Fieldset'
import UncontrolledField from '../components/uncontrolled/Field'
import { PrimaryTitle, SecondaryTitle, Subtitle } from '../components/Text'
import Code from './Code'

export default function Fields () {
  return (
    <div>
      <SecondaryTitle>Regular</SecondaryTitle>
      <Subtitle>Controlled</Subtitle>
      <h5>Normal</h5>
      <Code>
        <Field label='Enter your email' onTab={() => alert('tab')} onEnter={() => alert('enter')} />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field label='Enter your email' big />
      </Code>

      <h5>Focused</h5>
      <Code>
        <Field label='Enter your email' focus />
      </Code>

      <h5>Fake focused</h5>
      <Code>
        <Field label='Enter your email' focus='fake' />
      </Code>

      <h2>Error</h2>

      <h5>Normal</h5>
      <Code>
        <Field label='Invalid email' error value='invalid@' />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field label='Invalid email' error value='invalid@' big />
      </Code>

      <h2>Warning</h2>

      <h5>Normal</h5>
      <Code>
        <Field label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field label='Are you sure the domain is exanple?' warning value='email@exanple.com' big />
      </Code>

      <h2>Disabled</h2>

      <h5>Normal</h5>
      <Code>
        <Field disabled label='Address' value='16, Corn street' />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field disabled label='Address' value='16, Corn street' big />
      </Code>

      <h2>Focused</h2>

      <h5>Normal</h5>
      <Code>
        <Field focus label='Address' value='16, Corn street' />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field focus label='Address' value='16, Corn street' big />
      </Code>

      <h2>Stacked</h2>
      <h5>Normal</h5>
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

      <h5>Big</h5>
      <Code>
        <Fieldset>
          <Field big top left size='1/2' label='Given name' />
          <Field big center size='1/4' label='Middle name' />
          <Field big top right size='1/4' label='Last name' />
          <Field big left square size='1/5' label='Number' />
          <Field big right square size='4/5' label='Street Address' />
          <Field big left square size='1/3' label='Your favorite pokémon' />
          <Field big right square size='2/3' label='Android or iPhone: please explain' />
          <Field big left bottom size='2/5' label='Date of Birth' />
          <Field big right bottom size='3/5' label='Mobile phone number' />
        </Fieldset>
      </Code>

      <Subtitle>Uncontrolled</Subtitle>
      <h5>Normal</h5>
      <Code>
        <UncontrolledField name='email' label='Enter your email' />
      </Code>

      <h5>Big</h5>
      <Code>
        <UncontrolledField name='email' label='Enter your email' big />
      </Code>

      <h2>Error</h2>

      <h5>Normal</h5>
      <Code>
        <UncontrolledField name='email' error label='Invalid email' value='invalid@' />
      </Code>

      <h5>Big</h5>
      <Code>
        <UncontrolledField name='email' error label='Invalid email' value='invalid@' big />
      </Code>

      <h2>Warning</h2>

      <h5>Normal</h5>
      <Code>
        <UncontrolledField name='email' warning label='Are you sure the domain is exanple?' value='email@exanple.com' />
      </Code>

      <h5>Big</h5>
      <Code>
        <UncontrolledField name='email' warning label='Are you sure the domain is exanple?' value='email@exanple.com' big />
      </Code>

      <h2>Disabled</h2>

      <h5>Normal</h5>
      <Code>
        <UncontrolledField name='address' disabled label='Address' value='16, Corn street' />
      </Code>

      <h5>Big</h5>
      <Code>
        <UncontrolledField name='address' disabled label='Address' value='16, Corn street' big />
      </Code>

      <PrimaryTitle small blue>Sizes</PrimaryTitle>
      <Code>
        <Field name='email' label='Enter your email' />
        <Field big name='email' label='Enter your email' />
      </Code>

      <PrimaryTitle small blue>Types</PrimaryTitle>
      <Code>
        <Field type='text' name='text' label='Text' />
        <Field type='password' name='password' label='Password' />
        <Field type='number' name='number' label='Number' />
        <Field type='email' name='email' label='Email' />
        <Field type='search' name='search' label='Search' />
        <Field type='url' name='url' label='URL' />
      </Code>

      <PrimaryTitle small blue>States</PrimaryTitle>
      <Code>
        <Field error label='Invalid email' name='email' value='invalid@' />
        <Field big error label='Invalid email' name='email' value='invalid@' />
        <Field warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Field big warning label='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Field disabled name='address' label='Address' value='16, Corn street' />
      </Code>

      <PrimaryTitle small blue>Icons</PrimaryTitle>
      <Code>
        <Fieldset>
          <UncontrolledField
            icon='card'
            label='Please enter your credit card number' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='calendar'
            label='Date of Birth' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='lock'
            type='password'
            label='Password' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='person'
            label='Enter your user name' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='email'
            label='Enter your email address' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='phone'
            label='Mobile number' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='close'
            label='Enter an incorrect value (?)' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='question'
            label='Are we sure about these being field icons?' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='check'
            label='These look like button icons really' />
        </Fieldset>
        <Fieldset>
          <UncontrolledField
            icon='logout'
            label='Write something to log out' />
        </Fieldset>
      </Code>

    </div>
  )
}
