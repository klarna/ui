import React from 'react'
import Loader from '../Loader'
import * as Block from '../Block'

export default {
  title: 'Loader',
  icon: 'Loader',
  variations: [{
    title: 'Primary',
    require: 'import Loader from \'@klarna/ui/Loader\'',
    Big: [
      <Loader size='big' />
    ],
    Regular: [
      <Loader />
    ],
    Small: [
      <Loader size='small' />
    ],
    Tiny: [
      <Loader size='tiny' />
    ],
    Inline: [
      <Loader inline />
    ]
  }, {
    title: 'Secondary',
    require: 'import Loader from \'@klarna/ui/Loader\'',
    Big: [
      <Loader color='blue' size='big' />
    ],
    Regular: [
      <Loader color='blue' />
    ],
    Small: [
      <Loader color='blue' size='small' />
    ],
    Tiny: [
      <Loader color='blue' size='tiny' />
    ]
  }, {
    title: 'White',
    require: 'import Loader from \'@klarna/ui/Loader\'',
    Big: [
      <Block.Plain blue style={{padding: '20px'}}>
        <Loader color='white' size='big' />
      </Block.Plain>
    ],
    Regular: [
      <Block.Plain blue style={{padding: '20px'}}>
        <Loader color='white' />
      </Block.Plain>
    ],
    Small: [
      <Block.Plain blue style={{padding: '20px'}}>
        <Loader color='white' size='small' />
      </Block.Plain>
    ],
    Tiny: [
      <Block.Plain blue style={{padding: '20px'}}>
        <Loader color='white' size='tiny' />
      </Block.Plain>
    ]
  }]
}
