import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import componentQueries from 'react-component-queries'
import {
  uncontrolled,
  uniqueName,
  withDisplayName
} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'
import Option, {OPTION_HEIGHT} from './Option'
import Shadow from './Shadow'
import debounce from '../lib/debounce'

import grid from '../settings/grid'
import * as palette from '../settings/palette'
import * as breakpoints from '../settings/breakpoints'

const SHADOW_HEIGHT = 20

const styles = {
  base: {
    main: {
      marginTop: -SHADOW_HEIGHT,
      overflow: 'hidden',
      paddingTop: SHADOW_HEIGHT,
      position: 'relative'
    },
    optionWrapper: {
      left: 0,
      position: 'absolute',
      width: '100%'
    },
    rogueElement: {
      backgroundColor: palette.WHITE,
      left: 0,
      position: 'absolute',
      width: '100%'
    }
  }
}

const update = (component) => {
  component.setState({
    optionContentSizes: Array.from(component.domElement.childNodes)
      .slice(0, -1)
      .map(domNode =>
        domNode.getBoundingClientRect().height - OPTION_HEIGHT
      )
  })
}


class Radio extends Component {
  constructor () {
    super()

    this.resizeListener = debounce(() => update(this))

    this.state = {
      optionContentSizes: []
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeListener)

    this.resizeListener()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeListener)
  }

  render () {
    const {
      name,
      onChange,
      options,
      padded,
      radioMarkRight,
      value,
      ...props
    } = this.props
    const {optionContentSizes} = this.state

    const selectedIndex = value != null
      ? options.findIndex(({name}) => name === value)
      : undefined

    const rogueElementTranslateY = options.length * OPTION_HEIGHT +
      (selectedIndex !== undefined
        ? optionContentSizes[selectedIndex]
        : 0)

    return <div
      ref={domElement => { this.domElement = domElement }}
      style={{
        ...styles.base.main,
        height: (options.length * OPTION_HEIGHT) + SHADOW_HEIGHT +
          (selectedIndex !== undefined
            ? optionContentSizes[selectedIndex]
            : 0)
      }}
      {...props}>
      {options.map((optionProps, index) => {
        const {content, name: optionName, ...option} = optionProps
        return <Motion
          key={optionName}
          style={{
            translateY: spring(
              (index * OPTION_HEIGHT) +
              (selectedIndex !== undefined && selectedIndex < index
                ? optionContentSizes[selectedIndex]
                : 0)
            )
          }}>
          {({translateY}) => <div
            style={{
              ...styles.base.optionWrapper,
              transform: `translateY(${translateY}px)`
            }}>
            <Option
              index={index}
              name={name}
              id={optionName}
              onChange={() => onChange(optionName)}
              padded={padded}
              previousSelected={index > 0
                ? options[index - 1].name === value
                : false
              }
              radioMarkRight={radioMarkRight}
              selected={optionName === value}
              {...option}>
              {content}
            </Option>
          </div>}
        </Motion>
      })}
      <Motion
        style={{
          translateY: spring(rogueElementTranslateY)
        }}>
        {({translateY}) => <div
          style={{
            ...styles.base.rogueElement,
            height: SHADOW_HEIGHT +
              (selectedIndex !== undefined
                ? optionContentSizes[selectedIndex]
                : 0),
            transform: `translateY(${translateY}px)`
          }}>
          <Shadow
            reversed
            show={options[options.length - 1].name === value}
          />
        </div>}
      </Motion>
    </div>
  }
}

export default compose(
  withDisplayName('Radio'),
  componentQueries(
    ({width}) => width > breakpoints.MOBILE_MAX_WIDTH
      ? {padded: true}
      : {padded: false}
  ),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => name => name
    }
  }),
  uniqueName
)(Radio)
