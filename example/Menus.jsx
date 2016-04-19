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
      options: [{ key: 'home', label: 'Home' }]
    }

    this.add = this.add.bind(this)
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
  render () {
    return (
      <div>
        <AnimatedMenu
          {...this.props}
          selected='home'
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

      <Subtitle>Fluid</Subtitle>
      <Code>
        <AnimatedMenu
          onChange={(key) => console.log('You selected', key)}
          name='animated-fluid'
          selected='home'
          options={options}
        />
      </Code>

      <Subtitle>Static</Subtitle>
      <Code>
        <AnimatedMenu
          tabDisplay='static'
          name='animated-static'
          selected='home'
          options={options} />
      </Code>

      <Subtitle>White & Fluid</Subtitle>
      <Code>
        <div style={{background: '#333', padding: '20px'}}>
          <AnimatedMenu
            white
            name='animated-fluid-white'
            selected='archive'
            options={options} />
        </div>
      </Code>

      <Subtitle>White & Static</Subtitle>
      <Code>
        <div style={{background: '#333', padding: '20px'}}>
          <AnimatedMenu
            white
            tabDisplay='static'
            name='animated-static-white'
            selected='home'
            options={options} />
        </div>
      </Code>

      <Subtitle>Menus can be dynamic</Subtitle>
      <Paragraph>Click "Add" and check it out</Paragraph>
      <Code>
        <AddableMenu name='addable-fluid' />
      </Code>

      <Paragraph>Click "Add" and check it out</Paragraph>
      <Code>
        <AddableMenu name='addable-static' tabDisplay='static' />
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
