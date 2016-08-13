/* globals alert */
import React from 'react'
import Button from '../Button'
import Selector from '../Selector'
import UncontrolledSelector from '../uncontrolled/Selector'
import { Title } from '../Text'
import Code from '../Code'

export default function Selectors () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <Title.Secondary margins>Controlled</Title.Secondary>
      <Code>
        <Selector value={1} onChange={alert} data={data} />
      </Code>

      <Title.Secondary margins>Uncontrolled</Title.Secondary>
      <Code>
        <UncontrolledSelector data={data} />
      </Code>
    </div>
  )
}
