import React from 'react'
import CenteredSelection from '../CenteredSelection'
import FilteredSelection from '../FilteredSelection'
import Selection from '../Selection'
import Wrapper from '../Wrapper'
import DemoIcon from './DemoIcon'
import {SHOWCASE} from '../../Showroom/variationTypes'

const optionsData = [
  {key: 'lor', label: 'Lorem'},
  {key: 'ip', label: 'Ipsum'}
]

import Canvas from '../../Showroom/Lekplats/Canvas'
import lekplats from '../../Showroom/Lekplats'
import * as Code from '../../Code'
import asCode from '../../helpers/asCode'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

function SelectionExample ({
  desktop,
  narrow
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('welcome back')}>
    <Selection
      id='selection'
      title='What option do you prefer?'
      summary='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
      options={optionsData}
      value='ip'
      onSelect={(key) => console.log('selected ' + key)}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

SelectionExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  }
]

SelectionExample.defaultProps = {
  desktop: false,
  narrow: false
}

function FilteredSelectionExample ({
  desktop,
  narrow,
  uncontrolled
}) {
  const filteredSelectionExample = uncontrolled
    ? <FilteredSelection
      id='filtered-selection'
      title='Select your flavor'
      summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
      label='Start typing a flavor'
      options={[
        {key: 'chocolate', label: 'Chocolate'},
        {key: 'vanilla', label: 'Vanilla'},
        {key: 'raspberry', label: 'Raspberry'},
        {key: 'tiramisu', label: 'Tiramisu'},
        {key: 'mascarpone', label: 'Mascarpone'},
        {key: 'banana-split', label: 'Banana Split'},
        {key: 'anana', label: 'Anana'}
      ]}
      alternative='Manually enter your favorite flavor'
      onAlternative={() => console.log('alternative')}
      onChange={(e) => console.log('new value', e)}
      onSelect={(e) => console.log('selection', e)}
      defaultValue='A'
    />
    : <FilteredSelection
      id='filtered-selection'
      title='Select your flavor'
      summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
      label='Start typing a flavor'
      options={[
        {key: 'chocolate', label: 'Chocolate'},
        {key: 'vanilla', label: 'Vanilla'},
        {key: 'raspberry', label: 'Raspberry'},
        {key: 'tiramisu', label: 'Tiramisu'},
        {key: 'mascarpone', label: 'Mascarpone'},
        {key: 'banana-split', label: 'Banana Split'},
        {key: 'anana', label: 'Anana'}
      ]}
      alternative='Manually enter your favorite flavor'
      onAlternative={() => console.log('alternative')}
      onChange={(e) => console.log('new value', e)}
      onSelect={(e) => console.log('selection', e)}
      value='A'
    />
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('welcome back')}>
    {filteredSelectionExample}
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

FilteredSelectionExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'Uncontrolled',
    name: 'uncontrolled',
    value: false
  }
]

FilteredSelectionExample.defaultProps = {
  desktop: false,
  narrow: false,
  uncontrolled: false
}

function CenteredSelectionExample ({
  desktop,
  narrow,
  uncontrolled
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('welcome back')}>
    <CenteredSelection
      id='centered-selection'
      illustration={<DemoIcon />}
      title='Select your flavor'
      summary='Photo booth distillery man bun, bitters stumptown freegan cliche cronut green juice.'
      options={[
        {
          key: 'chocolate',
          description: 'Chocolate ice cream with cookies & swirls of pudding ice cream',
          label: 'Chocolate'
        },
        {
          key: 'vanilla',
          description: 'Dark caramel & vanilla ice creams with cookies & butter swirl',
          label: 'Vanilla'
        }
      ]}
      onSelect={(key) => console.log('selected ' + key)}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

CenteredSelectionExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  }
]

CenteredSelectionExample.defaultProps = {
  desktop: false,
  narrow: false
}

export default {
  title: 'Selection',
  variations: [
    {
      title: 'Selection',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(SelectionExample.options)(SelectionExample)
      )
    },

    {
      title: 'FilteredSelection',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(FilteredSelectionExample.options)(FilteredSelectionExample)
      )
    },

    {
      title: 'CenteredSelection',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(CenteredSelectionExample.options)(CenteredSelectionExample)
      )
    }
  ]
}
