import React from 'react'
import Centered from '../chromes/Centered'
import * as List from '../../List'

import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'three-step-explanation'

const classes = {
  list: `${baseClass}__list`
}

const classNames = classNamesBind.bind(defaultStyles)

export default function ThreeStepExplanation ({
  accept,
  bullets,
  onAccept,
  title,
  ...props
}) {
  return <Centered
    labels={{
      title,
      accept
    }}
    onAccept={onAccept}
    {...props}>
    <List.Iconic.Wrapper className={classNames(classes.list)}>
      {bullets.map(({icon, content}, i) => <List.Iconic.Item
        icon={icon}
        key={i}>
        {content}
      </List.Iconic.Item>)}
    </List.Iconic.Wrapper>
  </Centered>
}
