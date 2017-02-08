import React, { Component } from 'react'
import Collapsible from '../Collapsible'
import * as Button from '../Button'
import * as Paragraph from '../Paragraph'
import * as Title from '../Title'
import { LIVE } from '../Showroom/variationTypes'

class CollapsibleExample extends Component {
  constructor () {
    super()

    this.state = {
      collapsed: false
    }
  }

  render () {
    return <div>
      <Button.Primary
        onClick={() => this.setState({collapsed: !this.state.collapsed})}>
        Toggle
      </Button.Primary>
      <Collapsible
        collapsed={this.state.collapsed}
        lowFPS={false}
        onStartFPSCollection={() => console.log('Start FPS collection')}
        onEndFPSCollection={() => console.log('End FPS collection')}>
        <Title.Primary>
          Collapsible demonstration
        </Title.Primary>
        <Paragraph.Primary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Paragraph.Primary>
      </Collapsible>
    </div>
  }
}

export default {
  title: 'Collapsible',

  examples: {
    require: `import Collapsible from '@klarna/ui/Collapsible'
import * as Button from '@klarna/ui/Button'`,
    type: LIVE,

    examples: {
      Regular: <CollapsibleExample />
    }
  }
}
