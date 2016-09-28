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

// const options = [
//   {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
//   {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
//   {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
// ]

export default {
  title: 'UncontrolledForm',
  variations: [{
    title: 'Address form',
    require: `import Fieldset from '@klarna/ui/Fieldset'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'`,
    Regular: {
      example: [
        <form>
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
                {key: '', disabled: true, hidden: true},
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
                  connector: ' for ',
                  info: '3 months',
                  key: 'installments_3',
                  value: '$70.17/mo.'
                },
                {
                  connector: ' for ',
                  info: '6 months',
                  key: 'installments_6',
                  value: '$64.17/mo.'
                },
                {
                  connector: ' for ',
                  info: '12 months',
                  key: 'installments_12',
                  value: '$32.09/mo.'
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
      ],
      wide: true
    }
  }]
}
