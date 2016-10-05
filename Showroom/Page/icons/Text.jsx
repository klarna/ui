import React from 'react'
import Base, {Page} from './Base'

export default ({className}) => (
  <Base className={className} title='Text' circleFill='#293A4F'>
    <Page />
    <g transform='translate(25 30)' fill='#4F627F'>
      <rect width='30' height='2' rx='1'/>
      <rect y='29' width='20' height='2' rx='1'/>
      <rect x='30' y='29' width='20' height='2' rx='1'/>
      <g fill='#C3CFE2'>
        <path d='M0 20c0-.6.4-1 1-1h38c.5 0 1 .4 1 1s-.4 1-1 1H1c-.5 0-1-.4-1-1zm0-8c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1zm0 4c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1zm0-8c0-.6.4-1 1-1h48c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1z' />
        <path d='M0 49c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H1c-.6 0-1-.4-1-1zm0-4c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H1c-.6 0-1-.4-1-1zm0-4c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H1c-.6 0-1-.4-1-1zm0-4c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H1c-.6 0-1-.4-1-1z' />
        <path d='M30 41c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H31c-.6 0-1-.4-1-1zm0-4c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H31c-.6 0-1-.4-1-1zm0 12c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H31c-.6 0-1-.4-1-1zm0-4c0-.6.5-1 1-1h18c.6 0 1 .4 1 1s-.5 1-1 1H31c-.6 0-1-.4-1-1z' />
      </g>
    </g>
    <circle stroke='#C3CFE2' strokeWidth={2} cx='90' cy='40' r='9'/>
  </Base>
)
