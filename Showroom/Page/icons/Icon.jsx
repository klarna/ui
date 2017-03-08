import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Icon' circleFill='#48E29F'>
    <Page />
    <path strokeLinecap='round' strokeLinejoin='round' d='M44 40l4 4l8 -9' stroke='#48E29F' strokeWidth='2' />
    <rect fill='#4F627F' x='35' y='67' width='30' height='2' rx='1' />
    <path d='M30 79c0-.6.4-1 1-1h38c.5 0 1 .4 1 1s-.4 1-1 1H31c-.5 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h38c.5 0 1 .4 1 1s-.4 1-1 1H31c-.5 0-1-.4-1-1z' fill='#C3CFE2' />
    <circle fill='none' stroke='#48E29F' strokeWidth='2' cx='50' cy='40' r='14' />
  </Base>
)
