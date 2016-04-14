import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Menu from './Menu'
import styles from '@klarna/ui-css-components/src/components/tab-menu.scss'

const springConfig = { stiffness: 170, damping: 26 }

const AnimatedSelectedBar = ({ width, left }) => (
  <Motion style={{left: spring(left, springConfig), width: spring(width, springConfig)}}>
    {(style) => <div style={style} className={styles['cui__tab-menu__selected']} />}
  </Motion>
)

export default class AnimatedMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      width: 0,
      left: 0,
      selected: props.selected
    }

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  setStateForTab (tab) {
    const { left, width } = tab.getBoundingClientRect()
    const parentLeft = tab.parentNode.getBoundingClientRect().left

    this.setState({ width, left: (left - parentLeft) })
  }

  setStateForSelectedTab () {
    if (this.state.selected) {
      this.setStateForTab(document.getElementById(`${this.props.name}-${this.state.selected}-tab`))
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.options.length !== prevProps.options.length) {
      this.setStateForSelectedTab()
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setStateForSelectedTab()
    }, 0)
  }

  onClick ({ target }) {
    this.setStateForTab(target)
  }

  onChange (selected) {
    this.setState({ selected })

    if (this.props.onChange) {
      this.props.onChange(selected)
    }
  }

  render () {
    return (
      <Menu {...this.props}
        design='tab'
        selectable={false}
        selected={this.state.selected}
        onClick={this.onClick}
        onChange={this.onChange}>
        {this.state.width > 0 && <AnimatedSelectedBar {...this.state} />}
      </Menu>
    )
  }
}

AnimatedMenu.propTypes = {
  options: PropTypes.arrayOf(Menu.optionsSchema).isRequired,
  className: PropTypes.string,
  tabDisplay: PropTypes.oneOf(Menu.tabDisplays),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  white: PropTypes.bool
}
