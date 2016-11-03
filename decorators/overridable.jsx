import React from 'react'
import { withPropsFromContext } from 'react-context-props'

const overridable = (styles = {}, designName) => (Target) => {
  class OverridableComponent extends React.Component {
    constructor (props) {
      super(props)

      this.designName = designName || Target.displayName || Target.name
      this.Component = Target
    }
    componentWillMount () {
      this.styles = { ...styles, ...this.props.styles }
      this.getAndSetOverride()
    }
    componentWillUpdate () {
      this.getAndSetOverride()
    }
    getAndSetOverride () {
      if (!this.props.design.getOverrideFor) {
        return
      }
      const override = this.props.design.getOverrideFor(
        Object.assign(Target, { designName: this.designName })
      )
      this.Component = override.Component
      this.styles = { ...this.styles, ...override.css }
    }
    render () {
      const { design, ...otherProps } = this.props // eslint-disable-line
      const props = { ...otherProps, styles: this.styles }
      return <this.Component { ...props } />
    }
  }

  OverridableComponent.displayName = Target.displayName || Target.name
  OverridableComponent.defaultProps = {
    design: {},
    styles: {}
  }

  return withPropsFromContext(
    OverridableComponent,
    ['design']
  )
}

export default overridable
