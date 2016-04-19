import React from 'react'
import Field from '../components/Field'
import Code from './Code'

import { PrimaryTitle, Subtitle } from '../components/Text'

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
          <div key={Icon.displayName}>
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
