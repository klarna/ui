import React from 'react'
import StatefulField from '../components/stateful/Field'
import MailIcon from '../components/icons/Mail'
import LockIcon from '../components/icons/Lock'
import Code from './Code'

export default function Fields () {
  return (
    <div>
      <h2>Regular</h2>

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

      <h2>Icon</h2>

      <h5>Normal</h5>
      <Code>
        <StatefulField name='email' label='Email'>
          <MailIcon />
        </StatefulField>
        <StatefulField name='pin' label='PIN Code'>
          <LockIcon />
        </StatefulField>
      </Code>

      <h5>Error</h5>
      <Code>
        <StatefulField name='email' label='Email' error='Invalid email' value='invalid@'>
          <MailIcon />
        </StatefulField>
        <StatefulField name='pin' label='PIN Code' error='Invalid code' value='9236'>
          <LockIcon />
        </StatefulField>
      </Code>

      <h5>Warning</h5>
      <Code>
        <StatefulField name='email' label='Email' warning='Are you sure the domain is exanple?' value='email@exanple.com'>
          <MailIcon />
        </StatefulField>
        <StatefulField name='password' type='password' label='Password' warning='To make it stronger, prefer at least 8 characters' value='fghhgj'>
          <LockIcon />
        </StatefulField>
      </Code>

      <h5>Disabled</h5>
      <Code>
        <StatefulField name='email' label='Email' disabled value='email@exanple.com'>
          <MailIcon />
        </StatefulField>
        <StatefulField name='password' type='password' label='Password' disabled value='fghhgj'>
          <LockIcon />
        </StatefulField>
      </Code>

    </div>
  )
}
