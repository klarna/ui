import React from 'react'
import * as Alert from '../../../Alert'
import * as Block from '../../../Block'
import * as Button from '../../../Button'
import { Back } from '../../../IconButton'
import {LIVE} from '../../variationTypes'

export default {
  title: 'UniqueIds',
  variations: [
    {
      title: 'Alert',
      require: 'import * as Alert from \'@klarna/ui/Alert\'',
      type: LIVE,
      examples: {
        'Alert.Error': <Alert.Error id='alert-error'>
          <Alert.Title id='alert-error-title'>
            An error alert box heading
          </Alert.Title>
          <Alert.Paragraph id='alert-error-paragraph1'>
            Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert.Paragraph>
          <Alert.Paragraph id='alert-error-paragraph2'>
            ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
          </Alert.Paragraph>
        </Alert.Error>,

        'Alert.Warning': <Alert.Warning id='alert-warning'>
          <Alert.Title id='alert-warning-title'>
            An error alert box heading
          </Alert.Title>
          <Alert.Paragraph id='alert-warning-paragraph1'>
            Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert.Paragraph>
          <Alert.Paragraph id='alert-warning-paragraph2'>
            ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
          </Alert.Paragraph>
        </Alert.Warning>
      }
    },

    {
      title: 'Block',
      require: 'import * as Block from \'@klarna/ui/Block\'',
      type: LIVE,
      examples: {
        Block: <Block.Installments.Main id='block-installments'>
          <Block.Installments.Title id='block-installments-title'>
            Your Installments
          </Block.Installments.Title>
          <Block.Installments.Content id='block-installments-content'>
            <Block.Installments.Value
              id='block-installments-value'
              title='Estimated total'
              value='€100'
            />
            <Block.Installments.Value
              clarification='†'
              id='block-installments-value'
              title='APR'
              value='9.99%'
            />
          </Block.Installments.Content>
        </Block.Installments.Main>
      }
    },

    {
      title: 'Button',
      require: `import * as Button from '@klarna/ui/Button'
import { Back } from '@klarna/ui/IconButton'`,
      type: LIVE,
      examples: {
        'Button.Primary': <Button.Primary id='button-primary'>
          Click me!
        </Button.Primary>,

        'Button.Secondary': <Button.Secondary id='button-secondary'>
          Click me!
        </Button.Secondary>,

        'Button.Tertiary': <Button.Tertiary id='button-tertiary'>
          Click me!
        </Button.Tertiary>,

        'IconicButton': <Block.Plain
          key='0'
          style={{display: 'inline-block', padding: '20px'}}>
          <Back id='iconic-button-back' />
        </Block.Plain>
      }
    }
  ]
}
