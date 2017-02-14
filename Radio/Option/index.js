import React from 'react'
import RadioMark from '../../RadioMark'
import Collapsible from '../../Collapsible'
import defaultStyles from './styles'

export default ({
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
  name
}) => (option, index) => {
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
      style={defaultStyles.base.input}
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
      style={{
                ...defaultStyles.base.main,
                ...( index === 0 ? defaultStyles.first.main : {}),
                ...( index === options.length - 1 ? defaultStyles.last.main : {}),
                ...(borderless ? defaultStyles.borderless.main : {})
              }}
      id={ids.label}
      {...restOfProps}>
      <label
        htmlFor={`${name}-${key}`}
        style={defaultStyles.base.header}
        id={ids.header}>
        <div
          style={defaultStyles.base.inner}
          id={ids.headerInner}>
          {!singleOption && <div
            style={{
                      ...defaultStyles.base.left,
                      ...defaultStyles.base.leftmost
                    }}
            id={ids.left}>
            <RadioMark checked={key === value} disabled={isDisabled} customize={customize} lowFPS={lowFPS} />
          </div>}

          <div
            style={{
                      ...defaultStyles.base.right,
                      ...(aside ? {} : defaultStyles.base.rightmost),
                      ...(singleOption ? defaultStyles.base.leftmost : {})
                    }}
            id={ids.right}>
            <div
              id={ids.labelInner}
              style={{
                        ...defaultStyles.base.label,
                        ...(isDisabled ? defaultStyles.disabled.label : {}),
                        ...labelStyle}}>
              {label}
            </div>

            {description && <div
              id={ids.description}
              style={{
                        ...defaultStyles.base.description,
                        ...(isDisabled ? defaultStyles.disabled.description : {}),
                        ...descriptionStyle
                      }}>
              {description}
            </div>}
          </div>

          {aside && <div
            style={{
                      ...defaultStyles.base.aside,
                      ...defaultStyles.base.rightmost
                    }}
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
          style={{
                    ...defaultStyles.base.content,
                    ...(leftPad && !singleOption ? defaultStyles.leftPad.content : {})
                  }}
          id={ids.content}>
          {content}
        </div>
      </Collapsible>}
    </div>
  ]
}
