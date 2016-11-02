import React from 'react'
import { withPropsFromContext } from 'react-context-props'

const overridable = (styles = {}, designName) => (Target) => {
  const OverridableComponent = React.createClass({
    displayName: `overridable(${Target.displayName || Target.name})`,
    designName: designName || Target.displayName || Target.name,
    getDefaultProps () {
      return {
        design: {},
        styles: {}
      }
    },
    componentWillMount () {
      this.styles = { ...styles, ...this.props.styles }
      this.getAndSetOverride()
    },
    componentWillUpdate () {
      this.getAndSetOverride()
    },
    getAndSetOverride () {
      if (this.props.design.getOverrideFor) {
        const override = this.props.design.getOverrideFor(
          Object.assign(Target, { designName: this.designName })
        )
        this.Component = override.Component
        this.styles = { ...this.styles, ...override.css }
      } else {
        this.Component = Target
      }
    },
    render () {
      const { design, ...otherProps } = this.props // eslint-disable-line
      const props = { ...otherProps, styles: this.styles }
      return <this.Component { ...props } />
    }
  })

  return withPropsFromContext(
    OverridableComponent,
    ['design']
  )
}

export default overridable
