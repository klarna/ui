import React from 'react'
import {withPropsFromContext} from 'react-context-props'

export default propsMap => Target =>
  withPropsFromContext(
    ({layout, ...props}) => <Target
      {...{
        ...props,
        ...(propsMap[layout] ? propsMap[layout] : {})
      }}
    />,
    ['layout']
  )
