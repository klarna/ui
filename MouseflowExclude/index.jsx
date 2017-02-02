import React from 'react'

const NODE_COMMENT = 8
const COMMENT_START = 'MouseflowExcludeStart'
const COMMENT_END = 'MouseflowExcludeEnd'

const MouseflowExclude = React.createClass({
  displayName: 'MouseflowExclude',

  render () {
    return (
      <span ref={(span) => {
        const firstChild = span && span.childNodes && span.childNodes[0]

        if (firstChild == null) {
          return
        }

        if (firstChild.nodeType === NODE_COMMENT && firstChild.textContent === COMMENT_START) {
          return
        }

        span.insertBefore(document.createComment(COMMENT_START), firstChild)
        span.appendChild(document.createComment(COMMENT_END))
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
