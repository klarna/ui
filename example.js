import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Showroom from './Showroom'
import router from 'zen-router'
import { createStore } from 'redux'

const store = createStore(
  (state, action) => {
    switch (action.type) {
      case 'UPDATE_ROUTE':
        return {
          ...state,
          route: action.payload.split('/')
        }

      case 'TOGGLE_GRID':
        return {
          ...state,
          grid: !state.grid
        }

      default:
        return state
    }
  },
  {
    route: '',
    grid: false
  },
  window.devToolsExtension && window.devToolsExtension()
)

store.subscribe(() => render(
  <Showroom {...store.getState()} />,
  document.getElementById('root')
))

router((route) => store.dispatch({ type: 'UPDATE_ROUTE', payload: route }))
window.onkeypress = (e) =>
  e.keyCode === 103 &&
  store.dispatch({ type: 'TOGGLE_GRID' })
