const KEYS = {
  ENTER: 13,
  TAB: 9
}

const handleKeyDown = (onTab, onEnter) => (e) => {
  switch (e.keyCode) {
    case KEYS.TAB: {
      const direction = e.shiftKey ? -1 : 1
      return onTab(direction, e)
    }
    case KEYS.ENTER: {
      return onEnter(e)
    }
  }
}

export default (Component) => {
  const exportedComponent = ({onTab, onEnter, ...props}) => {
    const events = {
      onKeyDown: handleKeyDown(onTab, onEnter)
    }

    return new Component({...events, ...props})
  }

  exportedComponent.displayName = Component.name
  return exportedComponent
}
