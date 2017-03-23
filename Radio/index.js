import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import componentQueries from 'react-component-queries'
import {
  notifyOnLowFPS,
  overridable,
  uncontrolled,
  uniqueName,
  withDisplayName
} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'
import deepMerge from 'deepmerge'
import Option, {OPTION_HEIGHT} from './Option'
import Shadow from './Shadow'
import debounce from '../lib/debounce'

import * as palette from '../settings/palette'
import * as breakpoints from '../settings/breakpoints'

const SHADOW_HEIGHT = 20

const defaultStyles = {
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
  const options = component.props.options
  const optionContentSizes = Array.from(component.domElement.childNodes)
    .slice(0, -2)
    .map((domNode, index) =>
      domNode.getBoundingClientRect().height - OPTION_HEIGHT +
      (options[index].description
        ? 0
        : 20)
    )
  const selectedIndex = options.findIndex(({name}) => name === component.props.value)
  const height = (options.length * OPTION_HEIGHT) + SHADOW_HEIGHT +
    (selectedIndex !== -1
      ? optionContentSizes[selectedIndex]
      : 0)

  component.props.onHeightChange(height)
  component.setState({ optionContentSizes })
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

  componentDidUpdate () {
    this.resizeListener()
  }

  render () {
    const {
      customize,
      name,
      onChange,
      options,
      padded,
      radioMarkRight,
      styles,
      value,
      onStartFPSCollection,
      onEndFPSCollection,
      onHeightChange, // eslint-disable-line no-unused-vars
      lowFPS,
      ...props
    } = this.props
    const {optionContentSizes} = this.state

    const finalStyles = deepMerge(defaultStyles, styles.radio)
    let selectedIndex = options.findIndex(({name}) => name === value)

    if (selectedIndex === -1) {
      selectedIndex = null
    }

    const rogueElementTranslateY =
      (options.reduce(
        (height, option) =>
          option.description
            ? height + OPTION_HEIGHT
            : height + OPTION_HEIGHT - 20
        , 0
      )) +
      (selectedIndex !== null
        ? optionContentSizes[selectedIndex]
        : 0)

    return <div
      ref={domElement => { this.domElement = domElement }}
      style={{
        ...finalStyles.base.main,
        height: (options.length * OPTION_HEIGHT) + SHADOW_HEIGHT +
          (selectedIndex !== null && optionContentSizes[selectedIndex]
            ? optionContentSizes[selectedIndex]
            : 0)
      }}
      {...props}>
      {options.map((optionProps, index) => {
        const {
          content,
          name: optionName,
          ...option
        } = optionProps

        const translateY = (options.slice(0, index).reduce(
            (height, option) =>
              option.description
                ? height + OPTION_HEIGHT
                : height + OPTION_HEIGHT - 20
            , 0
          )) +
          (selectedIndex !== null && selectedIndex < index
            ? optionContentSizes[selectedIndex]
            : 0)

        return <Motion
          key={optionName}
          style={{
            translateY: lowFPS ? translateY : spring(translateY)
          }}
          onRest={onEndFPSCollection}>
          {({translateY}) => <div
            style={{
              ...finalStyles.base.optionWrapper,
              transform: `translateY(${translateY}px)`
            }}>
            <Option
              customize={customize}
              id={optionName}
              index={index}
              lowFPS={lowFPS}
              name={name}
              onChange={() => {
                onChange(optionName)
                onStartFPSCollection()
              }}
              padded={padded}
              previousSelected={index > 0
                ? options[index - 1].name === value
                : false
              }
              radioMarkRight={radioMarkRight}
              selected={optionName === value}
              styles={styles.option}
              {...option}>
              {content}
            </Option>
          </div>}
        </Motion>
      })}
      <Motion
        style={{
          translateY: lowFPS ? rogueElementTranslateY : spring(rogueElementTranslateY)
        }}>
        {({translateY}) => <div
          style={{
            ...finalStyles.base.rogueElement,
            height: SHADOW_HEIGHT +
              (selectedIndex !== null && optionContentSizes[selectedIndex]
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

Radio.defaultProps = {
  styles: {
    radio: {},
    option: {}
  },
  onHeightChange: () => {}
}

export default compose(
  withDisplayName('Radio'),
  componentQueries(
    ({width}) => width > breakpoints.MOBILE_MAX_WIDTH
      ? {padded: true}
      : {padded: false}
  ),
  notifyOnLowFPS({threshold: 10}),
  overridable(Radio.defaultProps.styles),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => name => name
    }
  }),
  uniqueName
)(Radio)
