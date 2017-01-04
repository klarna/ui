import React, {Component} from 'react'
import * as Button from '../../Button'
import Backdrop from '../../Backdrop'

class BackdropExample extends Component {
  constructor () {
    super()

    this.state = {
      open: false
    }
  }

  render () {
    return (
      <div>
        <Button.Primary onClick={() => this.setState({ open: true })}>
          Show Backdrop
        </Button.Primary>

        {this.state.open && <Backdrop
          onClick={() => this.setState({ open: false })}
        />}
      </div>
    )
  }
}

export const live = <BackdropExample />

export const code = '<Backdrop />'

export const require = 'import Backdrop from \'@klarna/ui/Backdrop\''
