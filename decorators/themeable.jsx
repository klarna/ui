import React from 'react'
import { withPropsFromContext } from 'react-context-props'

const themeable = function (adapter) {
  return function (Target) {
    const ThemeableComponent = withPropsFromContext(
      function ({ customizations, ...props }) {
        return (
          <Target
            {...{
              ...props,
              ...customizations ? adapter(customizations, props) : {}
            }}
          />
        )
      },
      ['customizations']
    )

    ThemeableComponent.displayName = Target.displayName || Target.name

    return ThemeableComponent
  }
}

export default themeable
