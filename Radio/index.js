import React, { Component, PropTypes } from 'react'
import compose from 'ramda/src/compose'
import deepMerge from 'deepmerge'
import {
  notifyOnLowFPS,
  themeable,
  uncontrolled,
  uniqueName,
  withLayoutProps
} from '@klarna/higher-order-components'
import {Motion, spring} from 'react-motion'
import Option from './Option'
import Collapsible from '../Collapsible'
import defaultStyles from './styles'
import getActiveElement from '../lib/getActiveElement'
import ExpandLabel from './ExpandLabel'

// The minimum/initial height of the ExpandLabel is 49 pixels. Unfortunately
// it seems to be no way to get rid of this magic number without triggering
// an animation on load
const EXPAND_LABEL_INITIAL_HEIGHT = 49

class Radio extends Component {
  constructor () {
    super()

    this.state = {
      expandLabelInitialHeight: EXPAND_LABEL_INITIAL_HEIGHT
    }
  }

  componentDidMount () {
    this.applyFocus()
  }

  componentDidUpdate () {
    this.applyFocus()
  }

  applyFocus () {
    if (
      this.props.focus &&
      this.refs[this.props.focus] &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { options, visibleOptions, value, onExpand, fullyExpanded } = nextProps

    const shouldExpand = value &&
      this.getOptionsLists(options, visibleOptions).collapsed.find(({key}) => key === value) != null

    if (shouldExpand && !fullyExpanded) {
      onExpand()
    }
  }

  getOptionsLists (options, visibleOptions) {
    return {
      visible: typeof visibleOptions !== 'undefined'
        ? options.slice(0, visibleOptions)
        : options,
      collapsed: typeof visibleOptions !== 'undefined'
        ? options.slice(visibleOptions)
        : []
    }
  }

  render () {
    const {
      borderless,
      customize,
      focus, // eslint-disable-line no-unused-vars
      options,
      disabled: allDisabled,
      visibleOptions,
      expandLabel,
      fullyExpanded,
      name,
      onBlur,
      onChange,
      onExpand,
      onFocus,
      onEndFPSCollection,
      onStartFPSCollection,
      lowFPS,
      thinPadding,
      styles,
      value,
      ...remainingProps
    } = this.props

    const finalStyles = deepMerge(defaultStyles, styles.radio)
    const singleOption = options.length === 1
    const baseStyle = customize ? { borderRadius: customize.borderRadius } : undefined
    const labelStyle = customize ? { color: customize.textPrimaryColor } : undefined
    const descriptionStyle = customize ? { color: customize.textSecondaryColor } : undefined

    const optionLists = this.getOptionsLists(options, visibleOptions)

    const isExpanded = fullyExpanded || optionLists.collapsed.length === 0

    const OptionWithProps = Option({
      allDisabled,
      onBlur,
      value,
      options,
      borderless,
      singleOption,
      customize,
      lowFPS,
      labelStyle,
      descriptionStyle,
      onStartFPSCollection,
      onEndFPSCollection,
      onFocus,
      onChange,
      name,
      thinPadding,
      styles
    })

    return (
      <div
        id={name}
        style={{
          ...finalStyles.base.main,
          ...(borderless ? finalStyles.borderless.main : {}),
          ...baseStyle
        }}
        {...remainingProps}>
        {optionLists.visible.map(OptionWithProps)}

        {optionLists.collapsed.length > 0 && <Collapsible
          onStartFPSCollection={onStartFPSCollection}
          onEndFPSCollection={onEndFPSCollection}
          lowFPS={lowFPS}
          minimumHeight={this.state.expandLabelInitialHeight}
          collapsed={!isExpanded}>
          <div>
            {optionLists.collapsed.map(OptionWithProps)}
          </div>
        </Collapsible>}

        {expandLabel && <Motion
          style={{
            opacity: spring(isExpanded ? 0 : 1),
            height: spring(isExpanded ? 0 : this.state.expandLabelInitialHeight, {stiffness: 40, damping: 15})
          }}>
          {({opacity, height}) => opacity > 0 && <div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: 'white',
                boxShadow: 'white 0 0 5px',
                height
              }}
            />
            <ExpandLabel
              onDOMElement={footer => footer && footer.getBoundingClientRect && (height => this.state.expandLabelInitialHeight !== height && this.setState({
                expandLabelInitialHeight: height
              }))(footer.getBoundingClientRect().height)}
              onClick={onExpand}
              label={expandLabel}
              style={{opacity}}
              styles={styles.expandLabel}
            />
          </div>}
        </Motion>}
      </div>
    )
  }
}

Radio.propTypes = {
  borderless: PropTypes.bool,
  className: PropTypes.string,
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    bulletColor: PropTypes.string.isRequired,
    textPrimaryColor: PropTypes.string.isRequired,
    textSecondaryColor: PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool,
  visibleOptions: PropTypes.number,
  expandLabel: PropTypes.string,
  fullyExpanded: PropTypes.bool,
  onExpand: PropTypes.func,
  focus: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onEndFPSCollection: PropTypes.func,
  onStartFPSCollection: PropTypes.func,
  lowFPS: PropTypes.bool,
  options: PropTypes.array.isRequired,
  styles: PropTypes.shape({
    radio: PropTypes.object,
    option: PropTypes.object,
    expandLabel: PropTypes.object
  }),
  thinPadding: PropTypes.bool,
  value: PropTypes.any
}

Radio.defaultProps = {
  fullyExpanded: false,
  styles: {
    radio: {},
    option: {},
    expandLabel: {},
    radioMark: {}
  },
  thinPadding: false
}

export default compose(
  withLayoutProps({
    desktop: {
      thinPadding: false
    },
    mobile: {
      thinPadding: true
    }
  }),
  notifyOnLowFPS({threshold: 10}),
  uncontrolled({
    prop: 'fullyExpanded',
    defaultProp: 'autoFullyExpanded',
    handlers: {
      onExpand: () => () => true
    }
  }),
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => field => field,
      onBlur: () => () => undefined
    }
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => value => value
    }
  }),
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      borderRadius: customizations.radius_border,
      textPrimaryColor: customizations.color_text,
      textSecondaryColor: customizations.color_text_secondary
    }
  })),
  uniqueName
)(Radio)
