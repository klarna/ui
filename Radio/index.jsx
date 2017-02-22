import React, { Component, PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import {
  notifyOnLowFPS,
  themeable,
  uncontrolled,
  uniqueName
} from '@klarna/higher-order-components'
import {Motion, spring} from 'react-motion'
import Collapsible from '../Collapsible'
import defaultStyles from './styles.scss'
import getActiveElement from '../lib/getActiveElement'
import RadioMark from '../RadioMark'
import ExpandLabel from './ExpandLabel'

const baseClass = 'radio'

const classes = {
  option: `${baseClass}__option`,
  optionAside: `${baseClass}__option__aside`,
  optionDescription: `${baseClass}__option__description`,
  optionLabel: `${baseClass}__option__label`,
  optionInput: `${baseClass}__option__input`,
  optionLeft: `${baseClass}__option__left`,
  optionLeftmost: `${baseClass}__option__leftmost`,
  optionRight: `${baseClass}__option__right`,
  optionRightmost: `${baseClass}__option__rightmost`,
  optionHeader: `${baseClass}__option__header`,
  optionHeaderInner: `${baseClass}__option__inner`,
  optionWrapper: `${baseClass}__option__wrapper`,
  optionContent: `${baseClass}__option__content`
}

class Radio extends Component {
  componentDidMount () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  }

  componentDidUpdate () {
    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  }

  render () {
    const {
      borderless,
      className,
      customize,
      focus,
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
      styles,
      value,
      ...remainingProps
    } = this.props

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const singleOption = options.length === 1
    const baseStyle = customize ? { borderRadius: customize.borderRadius } : undefined
    const labelStyle = customize ? { color: customize.textPrimaryColor } : undefined
    const descriptionStyle = customize ? { color: customize.textSecondaryColor } : undefined

    const optionLists = {
      visible: visibleOptions
        ? options.slice(0, visibleOptions)
        : options,
      collapsed: visibleOptions
        ? options.slice(visibleOptions)
        : []
    }

    const isExpanded = fullyExpanded ||
      (optionLists.collapsed.length === 0) ||
      (value && optionLists.collapsed.find(({key}) => key === value) != null)

    return (
      <div
        className={classNames(baseClass, {
          borderless,
          'is-focused': focus != null,
          'no-animations': lowFPS
        }, className)}
        id={name}
        style={baseStyle}
        {...remainingProps}>
        {optionLists.visible.map((option) => {
          const {
            key,
            label,
            description,
            disabled,
            aside,
            content,
            leftPad,
            ...restOfProps
          } = option

          const isDisabled = allDisabled || disabled
          const id = `${name}-${key}`
          const ids = {
            aside: `${id}__aside`,
            bullet: `${id}__bullet`,
            checkmark: `${id}__checkmark`,
            content: `${id}__content`,
            description: `${id}__description`,
            header: `${id}__header`,
            headerInner: `${id}__header--inner`,
            label: `${id}__label`,
            labelInner: `${id}__label--inner`,
            left: `${id}__left`,
            right: `${id}__right`,
            wrapper: `${id}__wrapper`
          }

          return [
            <input
              className={classNames(classes.optionInput)}
              id={id}
              name={name}
              type='radio'
              onBlur={onBlur}
              checked={key === value}
              onChange={() => onChange && key !== value && onChange(key)}
              onFocus={(e) => onFocus && onFocus(key, e)}
              ref={key}
              value={key}
              disabled={isDisabled}
            />,
            <div
              className={classNames(
                classes.option,
                {
                  'is-selected': key === value,
                  'is-focused': !isDisabled && focus === key,
                  'left-pad': leftPad && !singleOption,
                  'is-disabled': isDisabled
                }
              )}
              id={ids.label}
              {...restOfProps}>
              <label
                htmlFor={`${name}-${key}`}
                className={classNames(classes.optionHeader)}
                id={ids.header}>
                <div
                  className={classNames(classes.optionHeaderInner)}
                  id={ids.headerInner}>
                  {!singleOption && <div className={classNames(classes.optionLeft, classes.optionLeftmost)} id={ids.left}>
                    <RadioMark checked={key === value} disabled={isDisabled} customize={customize} lowFPS={lowFPS} />
                  </div>}

                  <div
                    className={classNames(
                      classes.optionRight,
                      {
                        [classes.optionRightmost]: !aside,
                        [classes.optionLeftmost]: singleOption
                      }
                    )}
                    id={ids.right}>
                    <div
                      className={classNames(classes.optionLabel)}
                      id={ids.labelInner}
                      style={labelStyle}>
                      {label}
                    </div>

                    {description && <div
                      className={classNames(classes.optionDescription)}
                      id={ids.description}
                      style={descriptionStyle}>
                      {description}
                    </div>}
                  </div>

                  {aside && <div
                    className={classNames(classes.optionAside, classes.optionRightmost)}
                    id={ids.aside}>
                    {aside}
                  </div>}
                </div>
              </label>

              {content && <Collapsible
                onStartFPSCollection={onStartFPSCollection}
                onEndFPSCollection={onEndFPSCollection}
                lowFPS={lowFPS}
                collapsed={isDisabled || !singleOption && key !== value}>
                <div
                  className={classNames(classes.optionContent)}
                  id={ids.content}>
                  {content}
                </div>
              </Collapsible>}
            </div>
          ]
        })}

        {visibleOptions && <Collapsible
          onStartFPSCollection={onStartFPSCollection}
          onEndFPSCollection={onEndFPSCollection}
          lowFPS={lowFPS}
          minimumHeight={49}
          collapsed={!isExpanded}>
          <div>
            {optionLists.collapsed.map((option) => {
              const {
                key,
                label,
                description,
                disabled,
                aside,
                content,
                leftPad,
                ...restOfProps
              } = option

              const isDisabled = allDisabled || disabled
              const id = `${name}-${key}`
              const ids = {
                aside: `${id}__aside`,
                bullet: `${id}__bullet`,
                checkmark: `${id}__checkmark`,
                content: `${id}__content`,
                description: `${id}__description`,
                header: `${id}__header`,
                headerInner: `${id}__header--inner`,
                label: `${id}__label`,
                labelInner: `${id}__label--inner`,
                left: `${id}__left`,
                right: `${id}__right`,
                wrapper: `${id}__wrapper`
              }

              return [
                <input
                  className={classNames(classes.optionInput)}
                  id={id}
                  name={name}
                  type='radio'
                  onBlur={onBlur}
                  checked={key === value}
                  onChange={() => onChange && key !== value && onChange(key)}
                  onFocus={(e) => onFocus && onFocus(key, e)}
                  ref={key}
                  value={key}
                  disabled={isDisabled}
                />,
                <div
                  className={classNames(
                    classes.option,
                    {
                      'is-selected': key === value,
                      'is-focused': !isDisabled && focus === key,
                      'left-pad': leftPad && !singleOption,
                      'is-disabled': isDisabled
                    }
                  )}
                  id={ids.label}
                  {...restOfProps}>
                  <label
                    htmlFor={`${name}-${key}`}
                    className={classNames(classes.optionHeader)}
                    id={ids.header}>
                    <div
                      className={classNames(classes.optionHeaderInner)}
                      id={ids.headerInner}>
                      {!singleOption && <div className={classNames(classes.optionLeft, classes.optionLeftmost)} id={ids.left}>
                        <RadioMark checked={key === value} disabled={isDisabled} customize={customize} lowFPS={lowFPS} />
                      </div>}

                      <div
                        className={classNames(
                          classes.optionRight,
                          {
                            [classes.optionRightmost]: !aside,
                            [classes.optionLeftmost]: singleOption
                          }
                        )}
                        id={ids.right}>
                        <div
                          className={classNames(classes.optionLabel)}
                          id={ids.labelInner}
                          style={labelStyle}>
                          {label}
                        </div>

                        {description && <div
                          className={classNames(classes.optionDescription)}
                          id={ids.description}
                          style={descriptionStyle}>
                          {description}
                        </div>}
                      </div>

                      {aside && <div
                        className={classNames(classes.optionAside, classes.optionRightmost)}
                        id={ids.aside}>
                        {aside}
                      </div>}
                    </div>
                  </label>

                  {content && <Collapsible
                    onStartFPSCollection={onStartFPSCollection}
                    onEndFPSCollection={onEndFPSCollection}
                    lowFPS={lowFPS}
                    collapsed={isDisabled || !singleOption && key !== value}>
                    <div
                      className={classNames(classes.optionContent)}
                      id={ids.content}>
                      {content}
                    </div>
                  </Collapsible>}
                </div>
              ]
            })}
          </div>
        </Collapsible>}

        {expandLabel && <Motion
          style={{
            opacity: spring(isExpanded ? 0 : 1),
            height: spring(isExpanded ? 0 : 49, {stiffness: 40, damping: 15})
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
              onClick={onExpand}
              label={expandLabel}
              style={{opacity}}
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
  styles: PropTypes.object,
  value: PropTypes.any
}

Radio.defaultProps = {
  fullyExpanded: false
}

export default compose(
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
