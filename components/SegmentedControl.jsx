import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/segmentedcontrol.scss'

const classNames = classNamesBind.bind(styles)

const staticSizesClassNames = ['', 'half', 'third', 'quarter', 'twenty']

export default function SegmentedControl (props) {
  const {
    className,
    design,
    options,
    name,
    onChange,
    ...remainingProps } = props

  const cls = classNames(styles.cui__segmentedcontrol, className)

  const items = []

  options.forEach(({ key, checked, label }, index) => {
    const id = `${name}-${key}`

    const clsLabel = classNames(styles['cui__segmentedcontrol__button'], {
      left: index === 0,
      center: index > 0 && index < options.length - 1,
      right: index === options.length - 1
    }, design === 'static' ? staticSizesClassNames[options.length - 1] : '')

    items.push(
      <input
        className={styles['cui__segmentedcontrol__input']}
        type='radio'
        name={name}
        id={id}
        key={`input-${index}`}
        onChange={() => onChange(key)}
        checked={checked}
      />
    )

    items.push(
      <label
        className={clsLabel}
        key={`label-${index}`}
        htmlFor={id}>
        { label }
      </label>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      { items }
    </div>
  )
}

SegmentedControl.defaultProps = {
  design: 'fluid'
}

SegmentedControl.designs = ['fluid', 'static']

SegmentedControl.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  design: PropTypes.oneOf(SegmentedControl.designs),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired
}
