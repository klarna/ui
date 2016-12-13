import React from 'react'
import * as Alert from '../../../Alert'
import * as Block from '../../../Block'
import * as Button from '../../../Button'
import * as Checklist from '../../../Checklist'
import * as ContextMenu from '../../../ContextMenu'
import * as Dialog from '../../../Dialog'
import Dropdown from '../../../Dropdown'
import Field from '../../../Field'
import Fieldset from '../../../Fieldset'
import {Back, Close} from '../../../IconButton'
import Input from '../../../Input'
import Installments from '../../../Installments'
import Label from '../../../Label'
import * as List from '../../../List'
import Logout from '../../../icons/Logout'
import Loader from '../../../Loader'
import * as Menu from '../../../Menu'
import * as Title from '../../../Title'
import * as Paragraph from '../../../Paragraph'
import * as Preview from '../../../Preview'
import Subtitle from '../../../Subtitle'
import {LIVE, MANUAL} from '../../variationTypes'

const Example = React.createClass({
  displayName: 'DialogExample',

  getInitialState () {
    return {
      open: false
    }
  },

  render () {
    const close = () => this.setState({ open: false })
    const open = () => this.setState({ open: true })

    return (
      <div>
        <Button.Primary onClick={open}>
          Show Dialog
        </Button.Primary>

        <Dialog.Overlay id='dialog-overlay' show={this.state.open}>
          <Dialog.Main id='dialog-main'>
            <Dialog.Icon id='dialog-icon'>
              <Close onClick={close} />
            </Dialog.Icon>

            <Dialog.Content id='dialog-content'>
              <Title.Primary margins>
                The title is primary
              </Title.Primary>
              <Subtitle margins>
                Just trying to fill up space
              </Subtitle>
              <Paragraph.Secondary margins>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
              </Paragraph.Secondary>
            </Dialog.Content>

            <Dialog.Footer id='dialog-footer'>
              <Button.Primary
                onClick={close}
                style={{width: '100%'}}>
                Close the nice dialog
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
})

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
    },

    {
      title: 'Dialog',
      require: `import * as Dialog from '@klarna/ui/Dialog'
import {Close} from '@klarna/ui/IconButton'
import * as Title from '@klarna/ui/Title'
import Subtitle from '@klarna/ui/Subtitle'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as Button from '@klarna/ui/Button'`,
      type: MANUAL,
      examples: {
        Regular: {
          live: <Example />,
          code: `<Dialog.Overlay id='dialog-overlay' show>
    <Dialog.Main id='dialog-main'>
      <Dialog.Icon id='dialog-icon'>
        <Close />
      </Dialog.Icon>

      <Dialog.Content id='dialog-content'>
        <Title.Primary margins>
          The title is primary
        </Title.Primary>
        <Subtitle margins>
          Just trying to fill up space
        </Subtitle>
        <Paragraph.Secondary margins>
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </Paragraph.Secondary>
      </Dialog.Content>

      <Dialog.Footer id='dialog-footer'>
        <Button.Primary
          style={{width: '100%'}}>
          Close the nice dialog
        </Button.Primary>
      </Dialog.Footer>
    </Dialog.Main>
  </Dialog.Overlay>`
        }
      }
    },

    {
      title: 'Dropdown',
      require: 'import Dropdown from \'@klarna/ui/Dropdown\'',
      type: LIVE,

      examples: {
        Dropdown: <Dropdown
          id='dropdown'
          label='Lorem ipsum'
          options={[
            { key: '', label: 'Pick one!', disabled: true, hidden: true },
            { key: 'lorem', label: 'Lorem' },
            { key: 'ipsum', label: 'Ipsum' }
          ]}
        />
      }
    },

    {
      title: 'Field',
      require: 'import Field from \'@klarna/ui/Field\'',
      type: LIVE,

      examples: {
        Field: <Field
          id='field'
          label='Enter your email'
        />
      }
    },

    {
      title: 'Fieldset',
      require: 'import Fieldset from \'@klarna/ui/Fieldset\'',
      type: LIVE,

      examples: {
        Fieldset: <Fieldset
          id='fieldset'
          fields={[
            {
              name: 'firstname',
              label: 'First Name',
              size: '1/2',
              top: true,
              left: true
            },
            {
              name: 'lastname',
              label: 'Last Name',
              size: '1/2',
              top: true,
              right: true
            },
            {
              name: 'address',
              label: 'Street address',
              bottom: true
            }
          ]}
          focus='lastname'
          values={{
            firstname: 'Dorothy'
          }}
          onChange={(values) => console.log('new values', values)}
        />
      }
    },

    {
      title: 'Input',
      require: 'import Input from \'@klarna/ui/Input\'',
      type: LIVE,

      examples: {
        Input: <Input
          id='input'
          label='Enter your email'
        />
      }
    },

    {
      title: 'Installments',
      require: 'import Installments from \'@klarna/ui/Installments\'',
      type: LIVE,

      examples: {
        Installments: <Installments
          onChange={(key) => console.log('You selected', key)}
          id='installments'
          name='installments'
          value='installments_12'
          options={[
            { key: 'installments_3', content: <div>Long one line text in div</div> },
            { key: 'installments_6', content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>] },
            { key: 'installments_12', content: 'Simple text content' },
            { key: 'installments_24', content: <div><div>Force</div><div>new line</div></div> }
          ]}
        />
      }
    },

    {
      title: 'Label',
      require: 'import Label from \'@klarna/ui/Label\'',
      type: LIVE,

      examples: {
        Label: <Label
          id='label'
          design='information'>
          information
        </Label>
      }
    },

    {
      title: 'List',
      require: 'import * as List from \'@klarna/ui/List\'',
      type: LIVE,

      examples: {
        'List.Unordered': <List.Unordered id='list-unordered'>
          <List.Item id='list-item1'>
            Is this the real life?
          </List.Item>
          <List.Item id='list-item2'>
            Is this just fantasy
          </List.Item>
          <List.Item id='list-item3'>
            Open your eyes
          </List.Item>
        </List.Unordered>,

        'List.Ordered': <List.Ordered id='list-ordered'>
          <List.Item id='list-item-ordered1'>
            ’Twas brillig, and the slithy toves
          </List.Item>
        </List.Ordered>,

        'List.Iconic': <List.Iconic.Wrapper id='list-iconic-wrapper'>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <circle
                stroke='#979797'
                fill='#D8D8D8'
                cx='30'
                cy='30'
                r='28'
              />
            </svg>}
            id='list-iconic-item1'>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <polygon
                stroke='#979797'
                fill='#D8D8D8'
                points='30 46.5 12.95 55.46 16.20 36.48 2.41 23.03 21.47 20.26 30 3 38.52 20.26 57.58 23.03 43.79 36.48 47.04 55.46'
              />
            </svg>}
            id='list-iconic-item2'>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
          <List.Iconic.Item
            icon={<svg width='60px' height='60px' viewBox='0 0 60 60'>
              <polygon
                stroke='#979797'
                fill='#D8D8D8'
                points='30 4 58 54 2 54'
              />
            </svg>}
            id='list-iconic-item3'>
            Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus. Longer make sure in several lines.
          </List.Iconic.Item>
        </List.Iconic.Wrapper>
      }
    },

    {
      title: 'Loader',
      require: 'import Loader from \'@klarna/ui/Loader\'',
      type: LIVE,

      examples: {
        Loader: <Loader id='loader' />
      }
    },

    {
      title: 'Menu',
      require: 'import * as Menu from \'@klarna/ui/Menu\'',
      type: LIVE,

      examples: {
        'Menu.Tab': <Menu.Tab
          id='menu-tab'
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='fluid'
          name='tab-fluid'
          value='home'
          options={[
            { key: 'home', label: 'Home' },
            { key: 'faq', label: 'FAQ' },
            { key: 'archive', label: 'Archive' }
          ]}
        />,

        'Menu.Segmented': <Menu.Segmented
          id='menu-segmented'
          onChange={(key) => console.log('You selected', key)}
          name='menu-segmented'
          value='home'
          options={[
            { key: 'home', label: 'Home' },
            { key: 'faq', label: 'FAQ' },
            { key: 'archive', label: 'Archive' }
          ]}
        />
      }
    },

    {
      title: 'Preview',
      require: 'import * as Preview from \'@klarna/ui/Preview\'',
      type: LIVE,

      examples: {
        Preview: <Preview.Main
          id='preview'
          onClick={() => console.log('You clicked the address')}>
          <Preview.Title id='preview-title'>
            John Smith
          </Preview.Title>
          <Preview.Content id='preview-content'>
            1425 North Avenue Street<br />
            San Francisco<br />
            94100 California<br />
            United States
          </Preview.Content>
          <Preview.Link id='preview-link'>
            Change address
          </Preview.Link>
        </Preview.Main>
      }
    }
  ]
}
