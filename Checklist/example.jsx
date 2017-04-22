import React from 'react'
import * as Checklist from './'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Checklist',
  icon: 'Checklist',
  examples: {
    require: `import * as Checklist from '@klarna/ui/Checklist'`,
    type: LIVE,

    examples: {
      Regular: <Checklist.Main>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>,

      Chromeless: <Checklist.Main chromeless>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>,

      Title: <Checklist.Main title='TITLE'>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    }
  }
}
