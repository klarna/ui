import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Showroom from './Showroom'

const render = () =>
  ReactDOM.render(<Showroom />, document.getElementById('root'))

window.onhashchange = render
render()
