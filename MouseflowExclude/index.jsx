import React from 'react'

const NODE_COMMENT = 8

const MouseflowExclude = React.createClass({
  displayName: 'MouseflowExclude',

  render () {
    return (
      <span ref={(span) => {
        if (span == null) {
          return
        }

        if (span.childNodes[0].nodeType === NODE_COMMENT && span.childNodes[0].textContent === 'MouseflowExcludeStart') {
          return
        }

        span.insertBefore(
          document.createComment('MouseflowExcludeStart'),
          span.childNodes[0]
        )

        span.appendChild(document.createComment('MouseflowExcludeEnd'))
      }}>
        {this.props.children}
      </span>
    )
  }
})

export const exclude = (Component) => (props) => (
  <MouseflowExclude>
    <Component {...props} />
  </MouseflowExclude>
)

export default MouseflowExclude
