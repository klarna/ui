import React from 'react'
import { withPropsFromContext } from 'react-context-props'

const overridable = function (styles = {}, designName) {
  return function (Target) {
    class OverridableComponent extends React.Component {
      constructor (props) {
        super(props)

        this.designName = designName || Target.displayName || Target.name
        this.styles = { ...styles, ...this.props.styles }
      }
      getAndSetOverride () {
        const override = this.props.design.getOverrideFor(
          Object.assign(Target, { designName: this.designName })
        )
        this.Component = override.Component || Target
        this.styles = { ...this.styles, ...override.css }
      }
      componentWillMount () {
        this.getAndSetOverride()
      }
      componentWillUpdate () {
        this.styles = { ...this.styles, ...this.props.styles }
        this.getAndSetOverride()
      }
      render () {
        const { design, ...otherProps } = this.props // eslint-disable-line
        const props = { ...otherProps, styles: this.styles }
        return <this.Component { ...props } />
      }
    }

    OverridableComponent.displayName = Target.displayName || Target.name
    OverridableComponent.defaultProps = {
      design: {
        getOverrideFor: function () { return {} }
      },
      styles: {}
    }

    return withPropsFromContext(
      OverridableComponent,
      ['design']
    )
  }
}

export default overridable
