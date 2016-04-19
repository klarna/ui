import React from 'react'
import Field from '../components/Field'
import Fieldset from '../components/Fieldset'
import StatefulField from '../components/stateful/Field'
import { PrimaryTitle, SecondaryTitle, Subtitle } from '../components/Text'
import Code from './Code'

import Arrow from '@klarna/ui-illustrations/src/Arrow'
import Details from '@klarna/ui-illustrations/src/Details'
import Download from '@klarna/ui-illustrations/src/Download'
import ExtendDate from '@klarna/ui-illustrations/src/ExtendDate'
import Items from '@klarna/ui-illustrations/src/Items'
import Logout from '@klarna/ui-illustrations/src/Logout'
import Mail from '@klarna/ui-illustrations/src/Mail'
import Password from '@klarna/ui-illustrations/src/Password'
import Person from '@klarna/ui-illustrations/src/Person'
import Phone from '@klarna/ui-illustrations/src/Phone'
import Question from '@klarna/ui-illustrations/src/Question'
import Remind from '@klarna/ui-illustrations/src/Remind'

const icons = [
  Arrow,
  Details,
  Download,
  ExtendDate,
  Items,
  Logout,
  Mail,
  Password,
  Person,
  Phone,
  Question,
  Remind
]

export default function Fields () {
  return (
    <div>
      <SecondaryTitle>Regular</SecondaryTitle>
      <Subtitle>Stateless</Subtitle>
      <h5>Normal</h5>
      <Code>
        <Field label='Enter your email' />
      </Code>

      <h5>Big</h5>
      <Code>
        <Field label='Enter your email' big />
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

      <Subtitle>Stateful</Subtitle>
      <h5>Normal</h5>
      <Code>
        <StatefulField name='email' label='Enter your email' />
      </Code>

      <h5>Big</h5>
      <Code>
        <StatefulField name='email' label='Enter your email' size='big' />
      </Code>

      <h2>Error</h2>

      <h5>Normal</h5>
      <Code>
        <StatefulField name='email' error='Invalid email' value='invalid@' />
      </Code>

      <h5>Big</h5>
      <Code>
        <StatefulField name='email' error='Invalid email' value='invalid@' size='big' />
      </Code>

      <h2>Warning</h2>

      <h5>Normal</h5>
      <Code>
        <StatefulField name='email' warning='Are you sure the domain is exanple?' value='email@exanple.com' />
      </Code>

      <h5>Big</h5>
      <Code>
        <StatefulField name='email' warning='Are you sure the domain is exanple?' value='email@exanple.com' size='big' />
      </Code>

      <h2>Disabled</h2>

      <h5>Normal</h5>
      <Code>
        <StatefulField name='address' disabled label='Address' value='16, Corn street' />
      </Code>

      <h5>Big</h5>
      <Code>
        <StatefulField name='address' disabled label='Address' value='16, Corn street' size='big' />
      </Code>

      <PrimaryTitle small blue>Sizes</PrimaryTitle>
      <Code>
        <Field name='email' label='Enter your email' />
        <Field size='big' name='email' label='Enter your email' />
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
        <Field error='Invalid email' name='email' value='invalid@' />
        <Field size='big' error='Invalid email' name='email' value='invalid@' />
        <Field warning='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Field size='big' warning='Are you sure the domain is exanple?' name='email' value='email@exanple.com' />
        <Field disabled name='address' label='Address' value='16, Corn street' />
      </Code>

      <PrimaryTitle small blue>Icons</PrimaryTitle>
      {

        icons.map((Icon) => (
          <div>
            <Subtitle>{Icon.displayName}</Subtitle>
            <Code key={Icon.displayName}>
              <Field name={Icon.displayName} label={Icon.displayName}>
                <Icon />
              </Field>
              <Field error={`Invalid ${Icon.displayName}`} name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Field>
              <Field warning='Are you sure?' name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Field>
              <Field disabled name={Icon.displayName} label={Icon.displayName} value='abc'>
                <Icon />
              </Field>
            </Code>
          </div>
        ))
      }

    </div>
  )
}
