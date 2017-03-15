import React from 'react'
import Fieldset from '../Fieldset'
import Theme from '../Theme'
import BoxSelector from '../BoxSelector'
import * as Button from '../Button'
import * as Checklist from '../Checklist'
import Dropdown from '../Dropdown'
import Field from '../Field'
import Link from '../Link'
import * as Switch from '../Switch'
import * as Title from '../Title'
import Radio from '../Radio'
import Subtitle from '../Subtitle'
import * as Paragraph from '../Paragraph'
import * as Selector from '../Selector'
import * as List from '../List'
import { Back, Hamburger } from '../IconButton'
import { LIVE } from '../Showroom/variationTypes'

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 1, label: 'Lorem' },
  { key: 2, label: 'Ipsum' }
]

const optionsWithContent = [
  {
    name: 'lorem',
    label: 'Lorem',
    description: 'Lorem Ipsum is simply dummy.',
    content: <Paragraph.Secondary condensed>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>
  },

  {
    name: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <BoxSelector
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        defaultValue='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    </div>
  },

  {
    name: 'ipsum',
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

export default {
  title: 'Theme',

  examples: {
    require: `import Theme from '@klarna/ui/Theme'
import BoxSelector from '@klarna/ui/BoxSelector'
import * as Button from '@klarna/ui/Button'
import * as Checklist from '@klarna/ui/Checklist'
import Dropdown from '@klarna/ui/Dropdown'
import * as Field from '@klarna/ui/Field'
import Field from '@klarna/ui/Field'
import Link from '@klarna/ui/Link'
import * as Switch from '@klarna/ui/Switch'
import * as Title from '@klarna/ui/Title'
import Radio from '@klarna/ui/Radio'
import Subtitle from '@klarna/ui/Subtitle'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as List from '@klarna/ui/List'`,
    type: LIVE,

    examples: {
      'Brand Volume': (
        <Theme brandVolume='high'>
          <Button.Primary style={{marginRight: 10}}> Try Me! </Button.Primary>
          <Button.Secondary> Try Me! </Button.Secondary>
        </Theme>
      ),
      Regular: <Theme
        customizations={{
          color_border: '#660080',
          color_border_selected: '#00ce3e',
          color_button: '#660080',
          color_button_text: '#00ce3e',
          color_checkbox: '#660080',
          color_checkbox_checkmark: '#00ce3e',
          color_details: '#00ce3e',
          color_header: '#00ce3e',
          color_link: '#00ce3e',
          color_text: 'green',
          color_text_secondary: 'red',
          radius_border: '10px'
        }}>

        <div>
          <Button.Primary>
            This button gets the theme from context
          </Button.Primary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <Button.Primary loading>
            This button gets the theme from context
          </Button.Primary>

          <Button.Primary disabled style={{marginLeft: '20px'}}>
            Disabled
          </Button.Primary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <Button.Secondary>
            This button gets the theme from context
          </Button.Secondary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <Button.Secondary loading>
            This button gets the theme from context
          </Button.Secondary>

          <Button.Secondary disabled style={{marginLeft: '20px'}}>
            Disabled
          </Button.Secondary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <Field
            label='Enter code here'
            defaultValue='42'
            pinCode
          />
        </div>

        <div style={{paddingTop: '20px'}}>
          <Back label='Back' />
        </div>

        <div style={{paddingTop: '20px'}}>
          <Hamburger />
        </div>

        <div style={{padding: '20px 0'}}>
          <Checklist.Main>
            <Checklist.Item>
              Just one click and you’re done
            </Checklist.Item>
            <Checklist.Item>
              Very little hassle
            </Checklist.Item>
            <Checklist.Item>
              Just do it! It can be done today, so why wait for  tomorrow?
            </Checklist.Item>
          </Checklist.Main>
        </div>

        <div style={{padding: '20px 0'}}>
          <Radio
            onChange={(key) => console.log(key)}
            options={optionsWithContent}
            defaultValue='lorem'
          />
        </div>

        <Fieldset margins>
          <Dropdown top label='Given name' options={options} defaultValue={1} />
          <Dropdown square label='Middle name' options={options} />
          <Dropdown bottom label='Last name' options={options} focus='fake' />
        </Fieldset>

        <Fieldset margins>
          <Dropdown top left size='1/2' label='Title' options={options} defaultValue={1} />
          <Field top right size='1/2' label='Address' defaultValue='16, Corn street' />
          <Field square label='Given name' />
          <Field bottom left size='1/2' error label='Family name' />
          <Dropdown bottom right size='1/2' label='Middle name' options={options} focus='fake' />
        </Fieldset>

        <div style={{paddingBottom: '20px'}}>
          <BoxSelector
            onChange={(key) => console.log('You selected', key)}
            defaultValue='installments_24'
            options={[
              {
                content: 'Lorem ipsum dolor sit amet',
                key: 'installments_3'
              },
              {
                content: 'Et consequetur bla bla',
                key: 'installments_6'
              },
              {
                content: 'Lorem ipsum dolor sit amet',
                key: 'installments_12'
              },
              {
                content: 'Et consequetur bla bla',
                key: 'installments_24'
              }
            ]}
          />
        </div>

        <div style={{paddingBottom: '20px'}}>
          <Link>Click me!</Link>
        </div>

        <div style={{paddingBottom: '20px'}}>
          <Switch.Toggle>
            Would you like fries?
          </Switch.Toggle>
          <Switch.Toggle defaultValue>
            Would you like fries?
          </Switch.Toggle>
          <Switch.Checkbox>
            Would you like fries?
          </Switch.Checkbox>
          <Switch.Checkbox defaultValue>
            Would you like fries?
          </Switch.Checkbox>
          <Switch.Checkbox defaultValue error>
            Should be red
          </Switch.Checkbox>
        </div>

        <div style={{paddingBottom: '20px'}}>
          <Title.Primary margins>
            Hello from the other side
          </Title.Primary>

          <Title.Secondary margins>
            Hello from the other side
          </Title.Secondary>

          <Subtitle margins>
            Hello from the other side
          </Subtitle>

          <Paragraph.Primary margins>
            Primary Paragraph, primary design
          </Paragraph.Primary>

          <Paragraph.Primary margins color='error'>
            An error text should reject custom style in favor of the initial style.
          </Paragraph.Primary>

          <Paragraph.Secondary margins>
            Paragraph, secondary design
          </Paragraph.Secondary>

          <Paragraph.Secondary margins color='warning'>
            An error text should reject custom style in favor of the initial style.
          </Paragraph.Secondary>

          <Paragraph.Legal margins>
            Paragraph, legal design
          </Paragraph.Legal>
        </div>

        <List.Unordered style={{marginBottom: '20px'}}>
          <List.Item>
            And as in uffish thought he stood,
          </List.Item>
          <List.Item>
            The Jabberwock, with eyes of flame,
          </List.Item>
          <List.Item>
            Came whiffling through the tulgey wood,
          </List.Item>
          <List.Item>
            And burbled as it came!
          </List.Item>
        </List.Unordered>

        <List.Ordered style={{paddingBottom: '20px'}}>
          <List.Item>
            Brilumis, kaj la ŝlirtaj melfoj
          </List.Item>
          <List.Item>
            en la iejo ĝiris, ŝraŭis;
          </List.Item>
          <List.Item>
            mizaris la maldikdudelfoj,
          </List.Item>
          <List.Item>
            forfuraj ratjoj vaŭis.
          </List.Item>
        </List.Ordered>

        <Selector.Input
          label='Organization type'
          link='Select'
        />
        <Selector.Input
          label='Please select an organization type'
          placeholder='Organization type'
          link='Select'
          error
        />
        <Selector.Input
          label='Organization type'
          link='Select'
          value='This is the value'
        />
        <Selector.Options
          data={options}
          value={2}
        />
      </Theme>
    }
  }
}
