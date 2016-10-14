import React from 'react'
import Fieldset from '../../../Fieldset'
import UncontrolledDropdown from '../../../uncontrolled/Dropdown'
import UncontrolledField from '../../../uncontrolled/Field'
import * as UncontrolledSwitch from '../../../uncontrolled/Switch'
import * as Button from '../../../Button'
import UncontrolledSelector from '../../../uncontrolled/Selector'
import * as UncontrolledMenu from '../../../uncontrolled/Menu'
import UncontrolledInstallments from '../../../uncontrolled/Installments'
import Subtitle from '../../../Subtitle'
import {SHOWCASE} from '../../variationTypes'

export default {
  title: 'UncontrolledForm',
  variations: [
    {
      title: 'Address form',
      type: SHOWCASE,

      example: <form>
        <Fieldset margins>
          <UncontrolledMenu.Tab
            name='consumer-type'
            options={[
              {key: 'person', label: 'Person'},
              {key: 'company', label: 'Company'}
            ]}
            value='person'
          />
        </Fieldset>

        <Fieldset margins>
          <UncontrolledSelector
            name='shipping-option'
            data={[
              {key: 'express', label: 'Express shipping'},
              {key: 'overnight', label: 'Overnight shipping'}
            ]}
          />
        </Fieldset>

        <Fieldset margins>
          <UncontrolledField
            label='First name'
            name='firstname'
            top left size='1/2'
          />
          <UncontrolledField
            label='Last name'
            name='lastname'
            top right size='1/2'
          />
          <UncontrolledField
            label='Street address'
            name='streetaddress'
            square size='3/4'
          />
          <UncontrolledDropdown
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
          <UncontrolledField
            label='Email'
            name='email'
            bottom left size='1/2'
          />
          <UncontrolledField
            label='Phone number'
            name='phonenumber'
            bottom right size='1/2'
          />
        </Fieldset>

        <Fieldset margins>
          <UncontrolledSwitch.Checkbox
            name='separate-shipping-address'>
            Separate shipping address
          </UncontrolledSwitch.Checkbox>
        </Fieldset>

        <Fieldset margins>
          <Subtitle>How many installments do you want to have?</Subtitle>
          <UncontrolledInstallments
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
