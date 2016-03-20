import React from 'react'
import MailIcon from '../components/icons/Mail'
import LockIcon from '../components/icons/Lock'
import Code from './Code'

export default function Icons () {
  return (
    <div>
      <h2>mail</h2>

      <h5>Sizes</h5>
      <Code>
        <MailIcon size='12px'/>
        <MailIcon />
        <MailIcon size='36px' />
        <MailIcon size='64px' />
        <MailIcon size='128px' />
        <MailIcon size='256px' />
        <MailIcon size='100%'/>
      </Code>

      <h5>States</h5>
      <Code>
        <MailIcon size='108px' />
        <MailIcon state='disabled' size='108px'/>
        <MailIcon state='error' size='108px' />
        <MailIcon state='focused' size='108px' />
        <MailIcon state='warning' size='108px' />
      </Code>

      <h2>lock</h2>

      <h5>Sizes</h5>
      <Code>
        <LockIcon size='12px'/>
        <LockIcon />
        <LockIcon size='36px' />
        <LockIcon size='64px' />
        <LockIcon size='128px' />
        <LockIcon size='256px' />
        <LockIcon size='100%' />
      </Code>

      <h5>States</h5>
      <Code>
        <LockIcon size='108px' />
        <LockIcon state='disabled' size='108px'/>
        <LockIcon state='error' size='108px' />
        <LockIcon state='focused' size='108px' />
        <LockIcon state='warning' size='108px' />
      </Code>

    </div>
  )
}
