import React, {Component} from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import deepMerge from 'deepmerge'
import {
  withNotifyOnLowFPS,
  withOverrideFromContext,
  withTheme,
  withUncontrolledProp,
  withUniqueFormIdentifier
} from '@klarna/higher-order-components'
import {Motion, spring} from 'react-motion'
import componentQueries from 'react-component-queries'
import Option from './Option'
import Collapsible from '../Collapsible'
import defaultStyles from './styles'
import getActiveElement from '../lib/getActiveElement'
import ExpandLabel from './ExpandLabel'
import * as breakpoints from '../settings/breakpoints'
import Loader from '../Loader'

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
      loading,
      name,
      noAnimation,
      onBlur,
      onChange,
      onExpand,
      onFocus,
      onEndFPSCollection,
      onLowFPS, // eslint-disable-line no-unused-vars
      onStartFPSCollection,
      lowFPS,
      padded,
      styles,
      value,
      ...remainingProps
    } = this.props

    const finalStyles = deepMerge(defaultStyles, (styles.radio || {}))
    const singleOption = options.length === 1
    const baseStyle = customize ? { borderRadius: customize.borderRadius } : undefined
    const labelStyle = customize ? { color: customize.textPrimaryColor } : undefined
    const descriptionStyle = customize ? { color: customize.textSecondaryColor } : undefined

    const optionLists = this.getOptionsLists(options, visibleOptions)

    const isExpanded = fullyExpanded || optionLists.collapsed.length === 0

    const OptionWithProps = Option({
      allDisabled: allDisabled || loading,
      onBlur,
      value,
      options,
      borderless,
      singleOption,
      customize,
      lowFPS,
      noAnimation,
      labelStyle,
      descriptionStyle,
      onStartFPSCollection,
      onEndFPSCollection,
      onFocus,
      onChange,
      name,
      padded: padded && options.length > 1,
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
          lowFPS={noAnimation || lowFPS}
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
              disabled={allDisabled || loading}
              style={{opacity}}
              styles={styles.expandLabel}
            />
          </div>}
        </Motion>}
        {loading && <div style={finalStyles.base.loaderWrapper}>
          <Loader />
        </div>}
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
  loading: PropTypes.bool,
  name: PropTypes.string,
  noAnimation: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onEndFPSCollection: PropTypes.func,
  onStartFPSCollection: PropTypes.func,
  lowFPS: PropTypes.bool,
  options: PropTypes.array.isRequired,
  padded: PropTypes.bool,
  styles: PropTypes.shape({
    radio: PropTypes.object,
    option: PropTypes.object,
    expandLabel: PropTypes.object
  }),
  value: PropTypes.any
}

Radio.defaultProps = {
  fullyExpanded: false,
  loading: false,
  styles: {
    radio: {},
    option: {},
    expandLabel: {},
    radioMark: {}
  }
}

Radio.displayName = 'Radio'

export default compose(
  componentQueries(
    ({width}) => width > breakpoints.MOBILE_MAX_WIDTH
      ? {padded: true}
      : {padded: false}
  ),
  withNotifyOnLowFPS({threshold: 10}),
  withUncontrolledProp({
    prop: 'fullyExpanded',
    defaultProp: 'autoFullyExpanded',
    handlers: {
      onExpand: () => () => true
    }
  }),
  withUncontrolledProp({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => field => field,
      onBlur: () => () => undefined
    }
  }),
  withUncontrolledProp({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => value => value
    }
  }),
  withTheme((customizations, {customize}) => ({
    customize: {
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      borderRadius: customizations.radius_border,
      textPrimaryColor: customizations.color_text,
      textSecondaryColor: customizations.color_text_secondary,
      ...customize
    }
  })),
  withUniqueFormIdentifier,
  withOverrideFromContext
)(Radio)
