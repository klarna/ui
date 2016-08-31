/* global alert */
import React from 'react'
import Radio from '../Radio'
import UncontrolledRadio from '../uncontrolled/Radio'

const data = [
  {key: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Radio',
  variations: [{
    title: 'Radio',
    Regular: [
      <Radio value={1} onChange={alert} data={data} />
    ],
    Uncontrolled: [
      <UncontrolledRadio data={data} />
    ],
    Borderless: [
      <Radio borderless value={1} onChange={alert} data={data} />
    ]
  }]
}
