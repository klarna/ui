import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import {uncontrolled} from '@klarna/higher-order-components'
import Option, {OPTION_HEIGHT} from './Option'
import Shadow from './Shadow'

import grid from '../settings/grid'
import * as palette from '../settings/palette'

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

class Radio extends Component {
  constructor () {
    super()

    this.state = {
      optionContentSizes: []
    }
  }

  componentDidMount () {
    this.setState({
      optionContentSizes: Array.from(this.domElement.childNodes)
      .slice(0, -1)
      .map(domNode =>
        domNode.getBoundingClientRect().height - OPTION_HEIGHT
      )
    })
  }

  render () {
    const {onChange, options, value, radioMarkRight, ...props} = this.props
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
      {options.map((option, index) => {
        return <Motion
          key={option.name}
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
              onClick={() => onChange(option.name)}
              index={index}
              selected={option.name === value}
              radioMarkRight={radioMarkRight}
              previousSelected={index > 0
                ? options[index - 1].name === value
                : false
              }
              {...option}>
              {option.content}
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

export default uncontrolled({
  prop: 'value',
  defaultProp: 'defaultValue',
  handlers: {
    onChange: () => name => name
  }
})(Radio)
