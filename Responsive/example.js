import React from 'react'
import webStorageAdapter from 'react-entanglement-web-storage-adapter'
import Entanglement from 'react-entanglement'
import DeviceSimulator from 'react-device-simulator'
import Radio from '../Radio'
import BoxSelector from '../BoxSelector'
import Dropdown from '../Dropdown'
import Subtitle from '../Subtitle'
import * as Checklist from '../Checklist'
import * as Paragraph from '../Paragraph'
import getResponsiveComponent from '../Responsive'
import {SHOWCASE} from '../Showroom/variationTypes'

import grid from '../settings/grid'
import * as palette from '../settings/palette'

const Responsive = getResponsiveComponent()

const card = <svg width='32px' height='22px' viewBox='0 0 32 22'>
  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
    <rect fill='#0074C8' x='0' y='0' width='32' height='22' rx='2' />
    <polygon fill='#E5E5E6' points='23 7 27 15 19 15' />
  </g>
</svg>

const optionsWithContent = [
  {
    key: 'lorem',
    label: 'Lorem',
    description: 'Lorem Ipsum is simply dummy.',
    aside: card,
    content: <Paragraph.Secondary style={{marginBottom: -10}}>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>
  },

  {
    key: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <BoxSelector
        name='installments'
        layout='horizontal'
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        defaultValue='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you’re done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    </div>
  },

  {
    key: 'ipsum',
    label: 'Ipsum',
    description: 'Dummy text ever since the 1500s.',
    content: <div>
      <Subtitle>Choose your destiny</Subtitle>

      <Dropdown
        options={[
          {key: 'coffee', label: 'Coffee'},
          {key: 'chai', label: 'Chai'},
          {key: 'latte', label: 'Latte'}
        ]}
        label='Infusion'
        defaultValue='coffee'
      />
    </div>
  }
]

const breakpoints = (width, height) => {
  if (width > 560) {
    return 'desktop'
  } else {
    return 'mobile'
  }
}

const adapter = webStorageAdapter('ui-showroom')

function Example () {
  return <Responsive
    onLayout={layout => console.log(layout)}
    breakpoints={breakpoints}>
    <Radio
      onChange={(key) => console.log(key)}
      options={optionsWithContent}
      defaultValue='lorem'
    />
  </Responsive>
}

const ScatteredExample = Entanglement.scatter({name: 'Example'})
const MaterializeExample = Entanglement.materialize({name: 'Example', constructor: Example})

export default {
  title: 'Responsive',

  examples: {
    title: 'Showcase',
    type: SHOWCASE,
    example: <div style={{
      borderColor: palette.GREY_LINES,
      borderStyle: 'solid',
      borderWidth: grid(0.2),
      display: 'flex',
      height: 700,
      position: 'relative',
      marginTop: 60,
      width: '100%'
    }}>
      <Entanglement adapter={adapter}>
        <ScatteredExample />
      </Entanglement>

      <DeviceSimulator url='./responsive-example.html' />
    </div>
  }
}
