import React from 'react'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

function Option ({
  key,
  label,
  description,
  disabled,
  aside,
  content,
  leftPad,
  styles,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles.base, styles)

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

  return <div>
    <input
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
      style={finalStyles.base.input}
    />
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
      style={finalStyles.base.option}
      {...restOfProps}>
      <label
        htmlFor={`${name}-${key}`}
        className={classNames(classes.optionHeader)}
        style={finalStyles.base.header}
        id={ids.header}>
        <div
          className={classNames(classes.optionHeaderInner)}
          style={finalStyles.base.inner}
          id={ids.headerInner}>
          {!singleOption && <div
            style={{...finalStyles.base.left, ...finalStyles.base.leftmost}}
            className={classNames(
              classes.optionLeft,
              classes.optionLeftmost
            )}
            id={ids.left}>
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
  </div>
}
