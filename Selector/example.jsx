import React from 'react'
import Selector from '../Selector'
import UncontrolledSelector from '../uncontrolled/Selector'

const data = [
  {key: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Selector',
  icon: 'Baseline',
  variations: [{
    title: 'Selector',
    require: `import Selector from '@klarna/ui/Selector'
import UncontrolledSelector from '@klarna/ui/uncontrolled/Selector'`,
    Regular: (
      <Selector value={1} data={data} />
    ),

    Uncontrolled: (
      <UncontrolledSelector data={data} />
    )
  }]
}
