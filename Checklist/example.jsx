import React from 'react'
import Code from '../Code'
import Checklist from './'
import { Title } from '../Text'

export default function Checklists () {
  return (
    <div>
      <Title.Secondary color='blue' margins>Regular</Title.Secondary>

      <Code>
        <Checklist>
          <Checklist.Item>Just one click and you're done</Checklist.Item>
          <Checklist.Item>Very little hassle</Checklist.Item>
          <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
        </Checklist>
      </Code>

      <Title.Secondary color='blue' margins>Chromeless</Title.Secondary>
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
