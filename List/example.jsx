import React from 'react'
import * as List from '../List'

export default {
  title: 'List',
  variations: [{
    title: 'Unordered',
    require: 'import * as List from \'@klarna/ui/List\'',
    Regular: [
      <List.Unordered>
        <List.Item>
          Is this the real life?
        </List.Item>
        <List.Item>
          Is this just fantasy
        </List.Item>
        <List.Item>
          Open your eyes
        </List.Item>
      </List.Unordered>
    ]
  }, {
    title: 'Ordered',
    require: 'import * as List from \'@klarna/ui/List\'',
    Regular: [
      <List.Ordered>
        <List.Item>
          'Twas brillig, and the slithy toves
        </List.Item>
        <List.Item>
          Did gyre and gimble in the wabe;
        </List.Item>
        <List.Item>
          All mimsy were the borogoves,
        </List.Item>
        <List.Item>
          And the mome raths outgrabe.
        </List.Item>
      </List.Ordered>
    ]
  }]
}
