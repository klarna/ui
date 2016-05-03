import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Menu from './Menu'
import styles from '@klarna/ui-css-components/src/components/tab-menu.scss'

const AnimatedSelectedBar = ({ width, left }) => (
  <Motion style={{left: spring(left), width: spring(width)}}>
    {(style) => <div style={style} className={styles['cui__tab-menu__selected']} />}
  </Motion>
)

export default class AnimatedMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = { width: 0, left: 0 }
  }

  update () {
    const tab = document.getElementById(`${this.props.name}-${this.props.selected}-tab`)
    const { left, width } = tab.getBoundingClientRect()
    const parentLeft = tab.parentNode.getBoundingClientRect().left

    this.setState({ width, left: (left - parentLeft) })
  }

  componentDidUpdate (prevProps) {
    if (this.props.options.length !== prevProps.options.length || this.props.selected !== prevProps.selected) {
      this.update()
    }
  }

  componentDidMount () {
    setTimeout(this.update.bind(this), 0)
  }

  render () {
    return (
      <Menu {...this.props} design='tab' selectable={false}>
        {this.state.width > 0 && <AnimatedSelectedBar {...this.state} />}
      </Menu>
    )
  }
}

AnimatedMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}
