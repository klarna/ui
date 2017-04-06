import React from 'react'
import CenteredForm from '../CenteredForm'
import SingleInputPrompt from '../SingleInputPrompt'
import CodePrompt from '../CodePrompt'
import Link from '../../Link'
import DemoIcon from './DemoIcon'
import Wrapper from '../Wrapper'
import { SHOWCASE } from '../../Showroom/variationTypes'

import Lekplats from '../../Showroom/Lekplats'

export default {
  title: 'Prompts',

  variations: [
    {
      title: 'SingleInputPrompt',
      type: SHOWCASE,

      example: <Lekplats
        options={[
          {
            label: 'Visible',
            name: 'visible',
            value: true
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
        ]}>
        {({
          highBrandVolume,
          uncontrolled,
          withError,
          loading,
          visible
        }) => {
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
          return <Wrapper
            visible={visible}
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            {singleInputPrompt}
          </Wrapper>
        }}
      </Lekplats>
    },

    {
      title: 'CenteredForm',
      type: SHOWCASE,

      example: <Lekplats
        options={[
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
        ]}>
        {({highBrandVolume, visible}) => <Wrapper
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
        </Wrapper>}
      </Lekplats>
    },

    {
      title: 'CodePrompt',
      type: SHOWCASE,

      example: <Lekplats
        options={[
          {
            label: 'Visible',
            name: 'visible',
            value: true
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
        ]}>
        {({
          uncontrolled,
          withMessage,
          withError,
          loading,
          visible
        }) => {
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
          return <Wrapper
            visible={visible}
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            {codePrompt}
          </Wrapper>
        }}
      </Lekplats>
    }
  ]
}
