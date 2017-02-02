import React from 'react'

const NODE_COMMENT = 8

const MouseflowExclude = React.createClass({
  displayName: 'MouseflowExclude',

  render () {
    return (
      <span ref={(span) => {
        const firstChild = span && span.childNodes && span.childNodes[0]

        if (firstChild == null) {
          return
        }

        if (firstChild.nodeType === NODE_COMMENT && firstChild.textContent === 'MouseflowExcludeStart') {
          return
        }

        span.insertBefore(
          document.createComment('MouseflowExcludeStart'),
          firstChild
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
