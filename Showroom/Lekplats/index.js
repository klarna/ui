import React, {Component} from 'react'
import Canvas from './Canvas'
import Toolbar from './Toolbar'

import * as Code from '../../Code'
import grid from '../../settings/grid'
import asCode from '../../helpers/asCode'


export default class Lekplats extends Component {
  constructor (props) {
    super(props)

    this.state = {
      values: props.options
        .reduce((state, {name, value}) => ({
          ...state,
          [name]: value
        }), {})
    }
  }

  render () {
    const {children, options} = this.props

    const content = children(this.state.values)

    return <div
      style={{
        marginRight: grid(4),
        width: '100%'
      }}>

      <section
        style={{
          display: 'flex',
          marginTop: grid(12),
          width: '100%'
        }}>
        <Canvas>
          {content}
        </Canvas>

        <Toolbar
          checkmarks={options}
          values={this.state.values}
          onChange={values => this.setState({values})}
        />
      </section>

      <Code.Block standalone style={{marginTop: 20}}>
        {asCode(content)}
      </Code.Block>
    </div>
  }
}
//
//
// options => Example => class Lekplats extends Component {
//   constructor () {
//     super()
//
//     this.state = options
//       .reduce((state, {name, value}) => ({
//         ...state,
//         [name]: value
//       }), {})
//   }
//
//   render () {
//     return <section
//       style={{
//         display: 'flex',
//         marginTop: grid(12),
//         width: '100%'
//       }}>
//       <Example {...this.state} />
//       <Toolbar
//         checkmarks={options}
//         values={this.state}
//         onChange={values => this.setState(values)}
//       />
//     </section>
//   }
// }
