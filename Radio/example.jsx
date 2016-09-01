/* global alert */
import React from 'react'
import Radio from '../Radio'
import UncontrolledRadio from '../uncontrolled/Radio'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Radio',
  variations: [{
    title: 'Radio',
    Regular: [
      <Radio value={'lorem'} onChange={alert} options={options} />
    ],
    Uncontrolled: [
      <UncontrolledRadio options={options} />
    ],
    Borderless: [
      <Radio borderless value={'lorem'} onChange={alert} options={options} />
    ],
    Disabled: [
      <UncontrolledRadio disabled value={'lorem'} onChange={alert} options={options} />
    ],
    'Borderless and disabled': [
      <UncontrolledRadio borderless disabled value={'lorem'} options={options} />
    ]
  }]
}
