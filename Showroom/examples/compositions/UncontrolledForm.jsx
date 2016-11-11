import React from 'react'
import Fieldset from '../../../Fieldset'
import Dropdown from '../../../Dropdown'
import Field from '../../../Field'
import * as Switch from '../../../Switch'
import * as Button from '../../../Button'
import * as Selector from '../../../Selector'
import * as Menu from '../../../Menu'
import Installments from '../../../Installments'
import Radio from '../../../Radio'
import Subtitle from '../../../Subtitle'
import * as Paragraph from '../../../Paragraph'
import * as Checklist from '../../../Checklist'
import {SHOWCASE} from '../../variationTypes'

const optionsWithContent = [
  {
    key: 'lorem',
    label: 'Lorem',
    description: 'Lorem Ipsum is simply dummy.',
    aside: <svg width='32px' height='22px' viewBox='0 0 32 22'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <rect fill='#0074C8' x='0' y='0' width='32' height='22' rx='2' />
        <polygon fill='#E5E5E6' points='23 7 27 15 19 15' />
      </g>
    </svg>,
    content: <Paragraph.Secondary condensed>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>,
    leftPad: true
  },

  {
    key: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <Installments
        name='inner-installments'
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        value='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
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
        name='ipsum-uncontrolled-dropdown-random-more-stuff'
        options={[
          {key: 'coffee', label: 'Coffee'},
          {key: 'chai', label: 'Chai'},
          {key: 'latte', label: 'Latte'}
        ]}
        label='Infusion'
        value='coffee'
      />
    </div>
  }
]

export default {
  title: 'UncontrolledForm',
  variations: [
    {
      title: 'Address form',
      type: SHOWCASE,

      example: <form>
        <Fieldset margins>
          <Menu.Tab
            name='consumer-type'
            options={[
              {key: 'person', label: 'Person'},
              {key: 'company', label: 'Company'}
            ]}
            defaultValue='person'
          />
        </Fieldset>

        <Fieldset margins>
          <Selector.Options
            name='shipping-option'
            data={[
              {key: 'express', label: 'Express shipping'},
              {key: 'overnight', label: 'Overnight shipping'}
            ]}
          />
        </Fieldset>

        <Fieldset margins>
          <Field
            label='First name'
            name='firstname'
            top left size='1/2'
          />
          <Field
            label='Last name'
            name='lastname'
            top right size='1/2'
          />
          <Field
            label='Street address'
            name='streetaddress'
            square size='3/4'
          />
          <Dropdown
            label='Continent'
            name='continent'
            center size='1/4'
            options={[
              {key: '', label: '', disabled: true, hidden: true},
              {key: 'africa', label: 'Africa'},
              {key: 'america', label: 'America'},
              {key: 'antarctica', label: 'Antarctica'},
              {key: 'asia', label: 'Asia'},
              {key: 'europe', label: 'Europe'},
              {key: 'oceania', label: 'Oceania'}
            ]}
          />
          <Field
            label='Email'
            name='email'
            bottom left size='1/2'
          />
          <Field
            label='Phone number'
            name='phonenumber'
            bottom right size='1/2'
          />
        </Fieldset>

        <Fieldset margins>
          <Switch.Checkbox
            name='separate-shipping-address'>
            Separate shipping address
          </Switch.Checkbox>
        </Fieldset>

        <Fieldset margins>
          <Subtitle>How many installments do you want to have?</Subtitle>
          <Installments
            name='installments'
            options={[
              {
                content: '3 months for $70.17/mo.',
                key: 'installments_3'
              },
              {
                content: '6 months for $64.17/mo.',
                key: 'installments_6'
              },
              {
                content: '12 months for $32.09/mo.',
                key: 'installments_12'
              }
            ]}
            value='installments_3'
          />
        </Fieldset>

        <Fieldset margins>
          <Subtitle>Ice cream flavor?</Subtitle>
          <Radio
            name='ice-cream-flavors'
            options={optionsWithContent}
          />
        </Fieldset>

        <Button.Primary type='submit' style={{marginRight: '20px'}}>
          Submit
        </Button.Primary>

        <Button.Secondary>
          Cancel
        </Button.Secondary>
      </form>
    }
  ]
}
