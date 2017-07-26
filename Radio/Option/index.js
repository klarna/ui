import React from 'react'
import deepMerge from 'deepmerge'
import * as Title from '../../Title'
import * as Paragraph from '../../Paragraph'
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
  name,
  noAnimation,
  onChange,
  onEndFPSCollection,
  onFocus,
  onStartFPSCollection,
  padded,
  styles
}) => (option, index) => {
  const {
    key,
    label,
    description,
    disabled,
    aside,
    hidden,
    content,
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

  const finalStyles = deepMerge(defaultStyles, (styles.option || {}))

  return [
    <input
      style={finalStyles.base.input}
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
        ...finalStyles.base.main,
        ...(index === 0 ? finalStyles.first.main : {}),
        ...(options.indexOf(options.find(option => option.key === key)) === options.length - 1 ? finalStyles.last.main : {}),
        ...(borderless ? finalStyles.borderless.main : {})
      }}
      data-is-hidden={hidden}
      id={ids.label}
      key={`${key}-${index}`}
      {...restOfProps}>
      <label
        htmlFor={`${name}-${key}`}
        style={{
          ...finalStyles.base.header,
          ...(key === value ? finalStyles.selected.header : {}),
          ...(isDisabled ? finalStyles.disabled.header : {})
        }}
        id={ids.header}>
        <div
          style={finalStyles.base.inner}
          id={ids.headerInner}>
          {!singleOption && <div
            style={{
              ...finalStyles.base.left,
              ...finalStyles.base.leftmost
            }}
            id={ids.left}>
            <RadioMark
              checked={key === value}
              disabled={isDisabled}
              customize={customize}
              lowFPS={lowFPS}
              styles={styles.radioMark ? styles.radioMark : {}}
            />
          </div>}

          <div
            style={{
              ...finalStyles.base.right,
              ...(aside ? {} : finalStyles.base.rightmost),
              ...(singleOption ? finalStyles.base.leftmost : {})
            }}
            id={ids.right}>
            <Title.Secondary
              id={ids.labelInner}
              style={{
                ...finalStyles.base.label,
                ...(isDisabled ? finalStyles.disabled.label : {}),
                ...labelStyle
              }}>
              {label}
            </Title.Secondary>

            {description && <Paragraph.Secondary
              id={ids.description}
              style={{
                ...finalStyles.base.description,
                ...(isDisabled ? finalStyles.disabled.description : {}),
                ...descriptionStyle
              }}>
              {description}
            </Paragraph.Secondary>}
          </div>

          {aside && <div
            style={{
              ...finalStyles.base.aside,
              ...finalStyles.base.rightmost,
              ...(isDisabled ? finalStyles.disabled.aside : {})
            }}
            id={ids.aside}>
            {aside}
          </div>}
        </div>
      </label>

      {content && <Collapsible
        onStartFPSCollection={onStartFPSCollection}
        onEndFPSCollection={onEndFPSCollection}
        lowFPS={noAnimation || lowFPS}
        collapsed={!singleOption && key !== value}>
        <div
          style={{
            ...finalStyles.base.content,
            ...(padded ? finalStyles.padded.content : {}),
            ...(isDisabled ? finalStyles.disabled.content : {})
          }}
          id={ids.content}>
          {content}
        </div>
      </Collapsible>}
    </div>
  ]
}
