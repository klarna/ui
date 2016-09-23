import React from 'react'
import Fieldset from '../Fieldset'
import Theme from '../Theme'
import * as ThemeableButton from '../themeable/Button'
import * as ThemeableChecklist from '../themeable/Checklist'
import ThemeableDropdown from '../themeable/Dropdown'
import ThemeableField from '../themeable/Field'
import ThemeableInstallments from '../themeable/Installments'
import ThemeableLink from '../themeable/Link'
import * as ThemeableSwitch from '../themeable/Switch'
import * as ThemeableTitle from '../themeable/Title'
import ThemeableSubtitle from '../themeable/Subtitle'
import * as ThemeableParagraph from '../themeable/Paragraph'
import * as ThemeableList from '../themeable/List'

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 1, label: 'Lorem' },
  { key: 2, label: 'Ipsum' }
]

export default {
  title: 'Theme',
  variations: [{
    title: 'Theme',
    require: `import Theme from '@klarna/ui/Theme'
import * as ThemeableButton from '@klarna/ui/themeable/Button'
import * as ThemeableChecklist from '@klarna/ui/themeable/Checklist'
import ThemeableDropdown from '@klarna/ui/themeable/Dropdown'
import ThemeableField from '@klarna/ui/themeable/Field'
import ThemeableInstallments from '@klarna/ui/themeable/Installments'
import ThemeableLink from '@klarna/ui/themeable/Link'
import * as ThemeableSwitch from '@klarna/ui/themeable/Switch'
import * as ThemeableTitle from '@klarna/ui/themeable/Title'
import ThemeableSubtitle from '@klarna/ui/themeable/Subtitle'
import * as ThemeableParagraph from '@klarna/ui/themeable/Paragraph'
import * as ThemeableList from '@klarna/ui/themeable/List'`,
    Regular: [
      <Theme
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
          <ThemeableButton.Primary>
            This button gets the theme from context
          </ThemeableButton.Primary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <ThemeableButton.Primary loading>
            This button gets the theme from context
          </ThemeableButton.Primary>

          <ThemeableButton.Primary disabled style={{marginLeft: '20px'}}>
            Disabled
          </ThemeableButton.Primary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <ThemeableButton.Secondary>
            This button gets the theme from context
          </ThemeableButton.Secondary>
        </div>

        <div style={{paddingTop: '20px'}}>
          <ThemeableButton.Secondary loading>
            This button gets the theme from context
          </ThemeableButton.Secondary>

          <ThemeableButton.Secondary disabled style={{marginLeft: '20px'}}>
            Disabled
          </ThemeableButton.Secondary>
        </div>

        <div style={{padding: '20px 0'}}>
          <ThemeableChecklist.Main>
            <ThemeableChecklist.Item>
              Just one click and you're done
            </ThemeableChecklist.Item>
            <ThemeableChecklist.Item>
              Very little hassle
            </ThemeableChecklist.Item>
            <ThemeableChecklist.Item>
              Just do it! It can be done today, so why wait for  tomorrow?
            </ThemeableChecklist.Item>
          </ThemeableChecklist.Main>
        </div>

        <Fieldset margins>
          <ThemeableDropdown top label='Given name' options={options} value={1} />
          <ThemeableDropdown square label='Middle name' options={options} />
          <ThemeableDropdown bottom label='Last name' options={options} focus='fake' />
        </Fieldset>

        <Fieldset margins>
          <ThemeableField top label='Address' value='16, Corn street' focus='fake' />
          <ThemeableField square label='Given name' />
          <ThemeableField bottom label='Family name' />
        </Fieldset>

        <div style={{paddingBottom: '20px'}}>
          <ThemeableInstallments
            onChange={(key) => console.log('You selected', key)}
            name='installments'
            value='installments_24'
            options={[
              { key: 'installments_6', value: '$64.17/mo.', connector: 'for', info: ' 6 months' },
              { key: 'installments_12', value: '$32.09/mo.', connector: 'for', info: ' 12 months' },
              { key: 'installments_24', value: '$16.05/mo.', connector: 'for', info: ' 24 months' }
            ]}
          />
        </div>

        <div style={{paddingBottom: '20px'}}>
          <ThemeableLink>Click me!</ThemeableLink>
        </div>

        <div style={{paddingBottom: '20px'}}>
          <ThemeableSwitch.Toggle name='fries'>
            Would you like fries?
          </ThemeableSwitch.Toggle>
          <ThemeableSwitch.Toggle value name='fries'>
            Would you like fries?
          </ThemeableSwitch.Toggle>
          <ThemeableSwitch.Checkbox name='fries'>
            Would you like fries?
          </ThemeableSwitch.Checkbox>
          <ThemeableSwitch.Checkbox value name='fries'>
            Would you like fries?
          </ThemeableSwitch.Checkbox>
        </div>

        <div style={{paddingBottom: '20px'}}>
          <ThemeableTitle.Primary margins>
            Hello from the other side
          </ThemeableTitle.Primary>

          <ThemeableTitle.Secondary margins>
            Hello from the other side
          </ThemeableTitle.Secondary>

          <ThemeableSubtitle margins>
            Hello from the other side
          </ThemeableSubtitle>

          <ThemeableParagraph.Primary margins>
            Primary Paragraph, primary design
          </ThemeableParagraph.Primary>

          <ThemeableParagraph.Secondary margins>
            Primary Paragraph, secondary design
          </ThemeableParagraph.Secondary>

          <ThemeableParagraph.Legal margins>
            Primary Paragraph, secondary design
          </ThemeableParagraph.Legal>
        </div>

        <ThemeableList.Unordered style={{marginBottom: '20px'}}>
          <ThemeableList.Item>
            And as in uffish thought he stood,
          </ThemeableList.Item>
          <ThemeableList.Item>
            The Jabberwock, with eyes of flame,
          </ThemeableList.Item>
          <ThemeableList.Item>
            Came whiffling through the tulgey wood,
          </ThemeableList.Item>
          <ThemeableList.Item>
            And burbled as it came!
          </ThemeableList.Item>
        </ThemeableList.Unordered>

        <ThemeableList.Ordered style={{paddingBottom: '20px'}}>
          <ThemeableList.Item>
            Brilumis, kaj la ŝlirtaj melfoj
          </ThemeableList.Item>
          <ThemeableList.Item>
            en la iejo ĝiris, ŝraŭis;
          </ThemeableList.Item>
          <ThemeableList.Item>
            mizaris la maldikdudelfoj,
          </ThemeableList.Item>
          <ThemeableList.Item>
            forfuraj ratjoj vaŭis.
          </ThemeableList.Item>
        </ThemeableList.Ordered>
      </Theme>
    ]
  }]
}
