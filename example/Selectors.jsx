/* globals alert */

import React from 'react'
import Selector from '../components/Selector'
import { Paragraph } from '../components/Text'
import Code from './Code'

export default function Selectors () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <Paragraph>
        Same as RadioGroups with different style.
      </Paragraph>
      <Code>
        <Selector selected={1} onChange={alert} data={data} />
      </Code>
    </div>
  )
}
