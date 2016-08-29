import 'babel-polyfill'
import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import Showroom from './Showroom'
import router from 'zen-router'

const parseRoute = (route) => route.split('/')

router((route) => {
  render(
    <Showroom route={parseRoute(route)} />,
    document.getElementById('root')
  )
})
