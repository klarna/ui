import React from 'react'
import Menu from '../components/Menu'
import AnimatedMenu from '../components/AnimatedMenu'
import Label from '../components/Label'
import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'

const options = [
  { key: 'home', label: 'Home' },
  { key: 'faq', label: 'FAQ' },
  { key: 'archive', label: 'Archive' }
]

const optionsWithComponents = [
  { key: 'home', label: <div>Home</div> },
  { key: 'faq', label: <div>To do <Label design='warning'>urgent</Label></div> }
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
      <SecondaryTitle margins small color='blue'>Tabs</SecondaryTitle>

      <Subtitle margins>Fluid</Subtitle>
      <Paragraph margins>
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

      <Subtitle margins>Static</Subtitle>
      <Paragraph margins>
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

      <Subtitle margins>White</Subtitle>
      <Paragraph margins>
        Click and check your console.
      </Paragraph>
      <Code>
        <div style={{background: '#0074c8', padding: '20px'}}>
          <Menu
            white
            onChange={(key) => console.log('You selected', key)}
            tabDisplay='static'
            name='tab-menu-static-white'
            selected='home'
            options={options} />
        </div>
      </Code>

      <SecondaryTitle margins small color='blue'>Animated</SecondaryTitle>

      <Paragraph margins>
        Animated menus must be controlled. On implementation reference can be found in examples/Menus.jsx.
      </Paragraph>

      <Subtitle margins>Fluid</Subtitle>
      <Paragraph margins>Click "Add" and check it out</Paragraph>
      <Code>
        <AddableMenu name='addable-fluid' />
      </Code>

      <Paragraph margins>Click "Add" and check it out</Paragraph>
      <Subtitle margins>Static</Subtitle>
      <Code>
        <AddableMenu name='addable-static' tabDisplay='static' />
      </Code>

      <Subtitle margins>White</Subtitle>
      <Code>
        <div style={{background: '#0074c8', padding: '20px'}}>
          <AddableMenu white name='addable-white' tabDisplay='static' />
        </div>
      </Code>

      <SecondaryTitle margins small color='blue'>Segmented</SecondaryTitle>

      <Subtitle margins>Fluid</Subtitle>
      <Paragraph margins>
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

      <Subtitle margins>Static</Subtitle>
      <Paragraph margins>
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

      <Subtitle margins>Options with components</Subtitle>
      <Paragraph margins>
        Options also support components as labels.
      </Paragraph>
      <Code>
        <Menu
          onChange={(key) => console.log('You selected', key)}
          tabDisplay='static'
          name='options-with-components'
          selected='home'
          options={optionsWithComponents} />
      </Code>
    </div>
  )
}
