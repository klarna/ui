import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Showroom from './Showroom'

const renderShowroom = (Component) => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root')
)

renderShowroom(Showroom)

if (module.hot) {
  module.hot.accept('./Showroom', () => {
    renderShowroom(require('./Showroom').default)
  })
}
