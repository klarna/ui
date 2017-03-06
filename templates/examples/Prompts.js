import React from 'react'
import CenteredForm from '../CenteredForm'
import SingleInputPrompt from '../SingleInputPrompt'
import CodePrompt from '../CodePrompt'
import Link from '../../Link'
import DemoIcon from './DemoIcon'
import Wrapper from '../Wrapper'
import { SHOWCASE } from '../../Showroom/variationTypes'

import Canvas from '../../Showroom/Lekplats/Canvas'
import lekplats from '../../Showroom/Lekplats'
import * as Code from '../../Code'
import asCode from '../../helpers/asCode'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

function SingleInputPromptExample ({
  desktop,
  narrow,
  highBrandVolume,
  uncontrolled,
  withError,
  loading,
  visible
}) {

  const singleInputPrompt = uncontrolled
    ? <SingleInputPrompt
      id='single-input-prompt'
      illustration={<DemoIcon />}
      title='Welcome to the site'
      summary='What is your name fellow traveler?'
      accept='Continue'
      legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
      label='Name'
      loading={loading}
      onChange={(e) => console.log(e.target.value)}
      onAccept={() => console.log('accept')}
      defaultValue={'Penelope Clearwater'}
      brandVolume={highBrandVolume ? 'high' : undefined}
      error={withError}
    />
    : <SingleInputPrompt
      id='single-input-prompt'
      focus
      illustration={<DemoIcon />}
      title='Welcome to the site'
      summary='What is your name fellow traveler?'
      accept='Continue'
      legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
      label='Name'
      loading={loading}
      onChange={(e) => console.log(e.target.value)}
      onAccept={() => console.log('accept')}
      value='Penelope Clearwater'
      brandVolume={highBrandVolume ? 'high' : undefined}
      error={withError}
    />
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    {singleInputPrompt}
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

SingleInputPromptExample.options = [
  {
    label: 'Visible',
    name: 'visible',
    value: true
  },
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
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'Uncontrolled',
    name: 'uncontrolled',
    value: true
  },
  {
    label: 'With error',
    name: 'withError',
    value: false
  },
  {
    label: 'Loading',
    name: 'loading',
    value: false
  }
]

SingleInputPromptExample.defaultProps = {
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  uncontrolled: true,
  withError: false,
  loading: false,
  visible: false
}

function CenteredFormExample ({
  desktop,
  narrow,
  highBrandVolume,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    <CenteredForm
      id='centered-form'
      accept='Continue'
      cancel='I’d rather get a car'
      defaultValues={{
        brandName: 'ACME',
        wheels: '2'
      }}
      fields={[
        {
          label: 'Wheels',
          left: true,
          name: 'wheels',
          size: '1/5'
        },
        {
          label: 'Color',
          center: true,
          name: 'color',
          size: '1/5'
        },
        {
          label: 'Length',
          right: true,
          name: 'length',
          size: '3/5'
        },
        {
          label: 'Brand name',
          name: 'brandName'
        }
      ]}
      onAccept={() => console.log('accepted')}
      onCancel={() => console.log('canceled')}
      fieldType='input'
      illustration={<DemoIcon />}
      summary='Paleo lo-fi pork belly, venmo activated charcoal franzen swag four dollar toast scenester pok pok thundercats twee plaid.'
      title='Describe your favorite bike'
      brandVolume={highBrandVolume ? 'high' : undefined}
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

CenteredFormExample.options = [
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
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'Visible',
    name: 'visible',
    value: true
  }
]

CenteredFormExample.defaultProps = {
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  visible: false
}

function CodePromptExample ({
  desktop,
  narrow,
  uncontrolled,
  withMessage,
  withError,
  loading,
  visible
}) {
  const codePrompt = uncontrolled
    ? <CodePrompt
      id='code-prompt'
      defaultValue='123'
      label='The numbers'
      title='Enter the magic numbers'
      summary='You know them. You’ve seen Lost too.'
      onChange={(e) => console.log(e.target.value)}
      length={4}
      message={withMessage ? 'I didn’t win the lottery yet' : undefined}
      pattern='\d{4}'
      errorMessage={withError ? 'It’s wingardium leviosa' : undefined}
      loading={loading ? 'Spell in progress' : undefined}
    />
    : <CodePrompt
      id='code-prompt'
      value='123'
      label='The numbers'
      title='Enter the magic numbers'
      summary='You know them. You’ve seen Lost too.'
      onChange={(e) => console.log(e.target.value)}
      length={4}
      message={withMessage ? 'I didn’t win the lottery yet' : undefined}
      errorMessage={withError ? 'It’s wingardium leviosa' : undefined}
      pattern='\d{4}'
      loading={loading ? 'Spell in progress' : undefined}
    />
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    {codePrompt}
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

CodePromptExample.options = [
  {
    label: 'Visible',
    name: 'visible',
    value: true
  },
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
    value: true
  },
  {
    label: 'With message',
    name: 'withMessage',
    value: false
  },
  {
    label: 'With error',
    name: 'withError',
    value: false
  },
  {
    label: 'Loading',
    name: 'loading',
    value: false
  }
]

CodePromptExample.defaultProps = {
  desktop: false,
  narrow: false,
  uncontrolled: false,
  withMessage: false,
  withError: false,
  loading: false,
  visible: false
}

export default {
  title: 'Prompts',

  variations: [
    {
      title: 'SingleInputPrompt',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(SingleInputPromptExample.options)(SingleInputPromptExample)
      )
    },

    {
      title: 'CenteredForm',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(CenteredFormExample.options)(CenteredFormExample)
      )
    },

    {
      title: 'CodePrompt',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(CodePromptExample.options)(CodePromptExample)
      )
    }
  ]
}
