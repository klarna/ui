import React from 'react'

export default React.createClass({
  displayName: 'MouseflowExclude',

  render () {
    return (
      <span ref={(span) => {
        if (span == null) {
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
