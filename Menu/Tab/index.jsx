import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'tab-menu'

export default function Menu ({
  className,
  tabDisplay,
  options,
  name,
  onChange,
  onClick,
  selected,
  selectable,
  white,
  children,
  styles,
  ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(baseClass, tabDisplay, className, {
    'is-selectable': selectable,
    white
  })

  const tabStyle = tabDisplay === 'static'
    ? {width: (100 / options.length) + '%'}
    : {}

  const items = options.map(({ key, label }, index) => {
    const id = `${name}-${key}`

    const tabClass = classNames(`${baseClass}__button`, {
      left: index === 0,
      center: index > 0 && index < options.length - 1,
      right: index === options.length - 1
    })

    return (
      <div key={index} style={{boxSizing: 'content-box'}}>
        <input
          className={classNames(`${baseClass}__input`)}
          type='radio'
          name={name}
          id={id}
          onChange={onChange && (() => onChange(key))}
          defaultChecked={key === selected} />
        <label
          id={`${id}-tab`}
          style={tabStyle}
          className={tabClass}
          onClick={onClick && ((event) => onClick(event))}
          htmlFor={id}>
          {label}
        </label>
      </div>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      {children}
      {items}
    </div>
  )
}

Menu.defaultProps = {
  tabDisplay: 'fluid',
  selectable: true
}

Menu.tabDisplays = ['fluid', 'static']

Menu.optionsSchema = PropTypes.shape({
  label: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired
})

Menu.propTypes = {
  options: PropTypes.arrayOf(Menu.optionsSchema).isRequired,
  className: PropTypes.string,
  tabDisplay: PropTypes.oneOf(Menu.tabDisplays),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  selectable: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.node
}

const AnimatedSelectedBar = ({ width, left }) => (
  <Motion style={{left: spring(left), width: spring(width)}}>
    {(style) => <div style={style} className={defaultStyles['tab-menu__selected']} />}
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
      <Menu {...this.props} selectable={false}>
        {this.state.width > 0 && <AnimatedSelectedBar {...this.state} />}
      </Menu>
    )
  }
}

AnimatedMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}
