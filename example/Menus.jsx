import React from 'react'
import Menu from '../components/Menu'
import AnimatedMenu from '../components/AnimatedMenu'
import { PrimaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

class AddableMenu extends React.Component {
  constructor (props) {
    super(props)

    this.newTabs = [
      'Lorem ipsum',
      'dolor sit amet',
      'elit'
    ]

    this.state = {
      options: [{ key: 'home', label: 'Home' }],
      selected: 'home'
    }

    this.add = this.add.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  add (e) {
    const newTab = this.newTabs.shift()
    if (!newTab) return

    this.setState({
      options: [
        ...this.state.options,
        { key: newTab, label: newTab }
      ]
    })
  }

  onChange (selected) {
    this.setState({ ...this.state, selected })
  }

  render () {
    return (
      <div>
        <AnimatedMenu
          {...this.props}
          selected={this.state.selected}
          onChange={this.onChange}
          options={this.state.options} />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
export default function Menus () {
  return (
    <div>
      <PrimaryTitle small blue>Tabs</PrimaryTitle>

      <Subtitle>Fluid</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          onChange={(key) => console.log('You selected', key)}
          name='tab-menu-fluid'
          selected='home'
          options={options}
        />
      </Code>

      <Subtitle>Static</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='tab-menu-static'
          selected='home'
          options={options} />
      </Code>

      <Subtitle>White</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <div style={{background: '#333', padding: '20px'}}>
          <Menu
            white
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            name='tab-menu-static-white'
            selected='home'
            options={options} />
        </div>
      </Code>

      <PrimaryTitle small blue>Animated</PrimaryTitle>

      <Paragraph>
        Animated menus must be controlled. On implementation reference can be found in examples/Menus.jsx.
      </Paragraph>

      <Subtitle>Fluid</Subtitle>
      <Paragraph>Click "Add" and check it out</Paragraph>
      <Code>
        <AddableMenu name='addable-fluid' />
      </Code>

      <Paragraph>Click "Add" and check it out</Paragraph>
      <Subtitle>Static</Subtitle>
      <Code>
        <AddableMenu name='addable-static' tabDisplay='static' />
      </Code>

      <Subtitle>White</Subtitle>
      <Code>
        <div style={{background: '#333', padding: '20px'}}>
          <AddableMenu white name='addable-white' tabDisplay='static' />
        </div>
      </Code>

      <PrimaryTitle small blue>Segmented</PrimaryTitle>

      <Subtitle>Fluid</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          design='segmented'
          onChange={(key) => console.log('You selected', key)}
          name='segmented-fluid'
          selected='home'
          options={options}
        />
      </Code>

      <Subtitle>Static</Subtitle>
      <Paragraph>
        Click and check your console.
      </Paragraph>
      <Code>
        <Menu
          design='segmented'
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='segmented-static'
          selected='home'
          options={options} />
      </Code>

    </div>
  )
}
