import React from 'react'
import Label, { designs } from '../Label'

export default {
  title: 'Label',
  variations: [{
    title: 'Label',
    Regular: designs.map((design) => (
      <Label key={design} design={design} style={{margin: '5px'}}>
        {design}
      </Label>
    )),

    Outlined: designs.map((design) => (
      <Label outline key={`outline-${design}`} design={design} style={{margin: '5px'}}>
        {design}
      </Label>
    )),

    Inverted: [
      <Label inverted style={{margin: '5px'}}>
        inverted
      </Label>,

      <Label inverted outline style={{margin: '5px'}}>
        inverted outline
      </Label>
    ]
  }]
}
