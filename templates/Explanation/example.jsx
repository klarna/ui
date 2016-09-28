import React from 'react'
import Explanation from './'
import Wrapper from '../Wrapper'

export default {
  title: 'Explanation',
  variations: [{
    title: 'Explanation Dialog',
    require: 'import Explanation from \'@klarna/ui/templates/Explanation\'',

    Regular: {
      inline: [
        <Explanation
          title='This is how the product works'
          content='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
          legal='Drinking vinegar unicorn fam pork belly prism. Vegan bicycle rights raclette tofu squid lomo coloring book, meggings marfa PBR&B bushwick. '
        />
      ],
      wrapper: [
        <Wrapper>
          <Explanation
            title='This is how the product works'
            content='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            legal='Drinking vinegar unicorn fam pork belly prism. Vegan bicycle rights raclette tofu squid lomo coloring book, meggings marfa PBR&B bushwick. '
          />
        </Wrapper>
      ]
    }
  }]
}
