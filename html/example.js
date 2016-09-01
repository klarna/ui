import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Showroom from '../Showroom'
import router from 'zen-router'

router((route) => {
  render(
    <Showroom route={route.split('/')} />,
    document.getElementById('root')
  )
})
