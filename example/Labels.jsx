import React from 'react'
import Label from '../components/Label'
import Code from './Code'

export default function Labels () {
  return (
    <div>
      <Code>
        {
          Label.designs.map((design) => (
            <Label key={design} design={design} style={{margin: '5px'}}>
              {design}
            </Label>
          ))
        }
        <br />
        {
          Label.designs.map((design) => (
            <Label outline key={`outline-${design}`} design={design} style={{margin: '5px'}}>
              {design}
            </Label>
          ))
        }

        <div style={{background: '#0074c8'}}>
          <Label inverted style={{margin: '5px'}}>
            inverted
          </Label>
          <Label inverted outline style={{margin: '5px'}}>
            inverted outline
          </Label>

        </div>
      </Code>
    </div>
  )
}
