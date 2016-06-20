import React from 'react'
import Code from './Code'
import Checklist from '../components/Checklist'
import { SecondaryTitle } from '../components/Text'

export default function Checklists () {
  return (
    <div>
      <SecondaryTitle color='blue' margins>Regular</SecondaryTitle>

      <Code>
        <Checklist>
          <Checklist.Item>Just one click and you're done</Checklist.Item>
          <Checklist.Item>Very little hassle</Checklist.Item>
          <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
        </Checklist>
      </Code>

      <SecondaryTitle color='blue' margins>Chromeless</SecondaryTitle>
      <Code>
        <Checklist chromeless>
          <Checklist.Item>Just one click and you're done</Checklist.Item>
          <Checklist.Item>Very little hassle</Checklist.Item>
          <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
        </Checklist>
      </Code>
    </div>
  )
}
