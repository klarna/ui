import React from 'react'
import SegmentedControl from '../components/SegmentedControl'
import Code from './Code'

export default function SegmentedControls () {
  return (
    <div>
      <h1>SegmentedControl examples</h1>

      <h3>Fluid</h3>
      <Code>
        <SegmentedControl
          design='fluid'
          name='navigation'
          options={[
            {
              key: 'home',
              label: 'Home',
              checked: true
            },

            {
              key: 'test',
              label: 'This is a really long'
            },

            {
              key: 'archive',
              label: 'Archive'
            }
          ]}
        />
      </Code>

      <h3>Static</h3>
      <Code>
        <SegmentedControl
          design='static'
          name='navigation-2'
          options={[
            {
              key: 'home',
              label: 'Home',
              checked: true
            },

            {
              key: 'about',
              label: 'About'
            },

            {
              key: 'archive',
              label: 'Archive'
            },

            {
              key: 'contact',
              label: 'Contact'
            }
          ]}
        />
      </Code>
    </div>
  )
}
