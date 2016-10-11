import React from 'react'
import Fieldset from '../Fieldset'
import Theme from '../Theme'
import * as Button from '../Button'
import * as Checklist from '../Checklist'
import Dropdown from '../Dropdown'
import Field from '../Field'
import Installments from '../Installments'
import Link from '../Link'
import * as Switch from '../Switch'
import * as Title from '../Title'
import Subtitle from '../Subtitle'
import * as Paragraph from '../Paragraph'
import * as ThemeableList from '../themeable/List'
import { LIVE } from '../Showroom/variationTypes'

import statefulFocus from '../lib/decorators/statefulFocus'
import statefulValue from '../lib/decorators/statefulValue'

const FocusableThemeableCheckbox = statefulValue(statefulFocus(Switch.Checkbox))

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 1, label: 'Lorem' },
  { key: 2, label: 'Ipsum' }
]

export default {
  title: 'Theme',

  examples: {
    require: `import Theme from '@klarna/ui/Theme'
import * as Button from '@klarna/ui/Button'
import * as Checklist from '@klarna/ui/Checklist'
import Dropdown from '@klarna/ui/Dropdown'
import Field from '@klarna/ui/Field'
import Installments from '@klarna/ui/Installments'
import Link from '@klarna/ui/Link'
import * as Switch from '@klarna/ui/Switch'
import * as Title from '@klarna/ui/Title'
import Subtitle from '@klarna/ui/Subtitle'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as ThemeableList from '@klarna/ui/themeable/List'`,
    type: LIVE,

    examples: {
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

        <div style={{padding: '20px 0'}}>
          <Checklist.Main>
            <Checklist.Item>
              Just one click and you're done
            </Checklist.Item>
            <Checklist.Item>
              Very little hassle
            </Checklist.Item>
            <Checklist.Item>
              Just do it! It can be done today, so why wait for  tomorrow?
            </Checklist.Item>
          </Checklist.Main>
        </div>

        <Fieldset margins>
          <Dropdown top label='Given name' options={options} value={1} />
          <Dropdown square label='Middle name' options={options} />
          <Dropdown bottom label='Last name' options={options} focus='fake' />
        </Fieldset>

        <Fieldset margins>
          <Field top label='Address' value='16, Corn street' focus='fake' />
          <Field square label='Given name' />
          <Field bottom label='Family name' />
        </Fieldset>

        <div style={{paddingBottom: '20px'}}>
          <Installments
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
          <Link>Click me!</Link>
        </div>

        <div style={{paddingBottom: '20px'}}>
          <Switch.Toggle name='fries'>
            Would you like fries?
          </Switch.Toggle>
          <Switch.Toggle value name='fries'>
            Would you like fries?
          </Switch.Toggle>
          <FocusableThemeableCheckbox name='fries-2'>
            Would you like fries?
          </FocusableThemeableCheckbox>
          <FocusableThemeableCheckbox value name='fries-3'>
            Would you like fries?
          </FocusableThemeableCheckbox>
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

          <Paragraph.Secondary margins>
            Paragraph, secondary design
          </Paragraph.Secondary>

          <Paragraph.Legal margins>
            Paragraph, legal design
          </Paragraph.Legal>
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
    }
  }
}
