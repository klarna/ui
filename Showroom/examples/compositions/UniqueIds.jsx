import React from 'react'
import * as Alert from '../../../Alert'
import * as Block from '../../../Block'
import * as Button from '../../../Button'
import * as Checklist from '../../../Checklist'
import * as ContextMenu from '../../../ContextMenu'
import {Back} from '../../../IconButton'
import Logout from '../../../icons/Logout'
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
    },

    {
      title: 'Checklist',
      require: 'import * as Checklist from \'@klarna/ui/Checklist\'',
      type: LIVE,

      examples: {
        Checklist: <Checklist.Main id='checklist-main'>
          <Checklist.Item id='checklist-main-item1'>
            Just one click and you're done
          </Checklist.Item>
          <Checklist.Item id='checklist-main-item2'>
            Very little hassle
          </Checklist.Item>
          <Checklist.Item id='checklist-main-item3'>
            Just do it! It can be done today, so why wait for  tomorrow?
          </Checklist.Item>
        </Checklist.Main>
      }
    },

    {
      title: 'ContextMenu',
      require: `import * as ContextMenu from '@klarna/ui/ContextMenu'
import Logout from '@klarna/ui/Logout'`,
      type: LIVE,
      examples: {
        ContextMenu: <ContextMenu.Main id='context-menu-main'>
          <ContextMenu.Link id='context-menu-link1'>
            Buttons
          </ContextMenu.Link>
          <ContextMenu.Link id='context-menu-link2'>
            Icons
          </ContextMenu.Link>
          <ContextMenu.Link id='context-menu-link3'>
            Labels
          </ContextMenu.Link>
          <ContextMenu.Item id='context-menu-link4'>
            <form>Custom form</form>
          </ContextMenu.Item>
          <ContextMenu.Separator id='context-menu-separator' />
          <ContextMenu.Link id='context-menu-link5'>
            <ContextMenu.Icon id='context-menu-icon'>
              <Logout />
            </ContextMenu.Icon>
            Logout
          </ContextMenu.Link>
        </ContextMenu.Main>
      }
    }
  ]
}
