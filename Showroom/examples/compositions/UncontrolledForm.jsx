import React from 'react'
import Fieldset from '../../../Fieldset'
import UncontrolledField from '../../../uncontrolled/Field'
import * as Button from '../../../Button'

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
    Regular: [
      <form>
        <Fieldset margins>
          <UncontrolledField
            label='First name'
            name='firstname'
          />
        </Fieldset>

        <Button.Primary type='submit'>
          Submit
        </Button.Primary>
      </form>
    ]
  }]
}
