import React from 'react'
import * as Selector from '../Selector'
import UncontrolledSelector from '../uncontrolled/Selector'

const optionsData = [
  {key: 1, label: 'Lorem'},
  {key: 2, label: 'Ipsum'}
]

const Options = {
  title: 'Options Selector',
  require: `import * as Selector from '@klarna/ui/Selector'
import UncontrolledSelector from '@klarna/ui/uncontrolled/Selector'`,
  Regular: (
    <Selector.Options value={1} name='selector' data={optionsData} />
  ),

  Uncontrolled: (
    <UncontrolledSelector name='selector-uncontrolled' data={optionsData} />
  ),

  Focus: (
    <Selector.Options focus={2} name='selector' data={optionsData} />
  )
}
const directData = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]
const Direct = {
  title: 'Direct Selector',
  require: `import * as Selector from '@klarna/ui/Selector'
import UncontrolledSelector from '@klarna/ui/uncontrolled/Selector'`,
  Regular: (
    <Selector.Direct data={directData} onSelect={(v) => (v)} />
  )
}

export default {
  title: 'Selector',
  icon: 'Baseline',
  variations: [Options, Direct]
}
