import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Label' circleFill='#990046'>
    <Page />
    <rect fill='#4F627F' x='35' y='30' width='30' height='2' rx='1' />
    <rect fill='#C3CFE2' x='30' y='34' width='40' height='2' rx='1' />
    <path d='M25 79c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-7c0-.6.4-1 1-1h28c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1zm0-4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H26c-.6 0-1-.4-1-1z' fill='#C3CFE2' />
    <rect fill='#990046' x='57' y='67' width='8' height='2' rx='1' />
  </Base>
)
