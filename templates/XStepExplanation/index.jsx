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

export default function XStepExplanation ({
  id,
  accept,
  bullets,
  onAccept,
  title,
  ...props
}) {
  const ids = id
    ? {
      centered: `${id}__centered`,
      listWrapper: `${id}__list-wrapper`,
      listItem: index => `${id}__list-item__${index}`
    }
    : {
      listItem: () => ''
    }

  return <Centered
    id={ids.centered}
    labels={{
      title,
      accept
    }}
    onAccept={onAccept}
    {...props}>
    <List.Iconic.Wrapper
      id={ids.listWrapper}
      className={classNames(classes.list)}>
      {bullets.map(({icon, content}, i) => <List.Iconic.Item
        id={ids.listItem(i)}
        icon={icon}
        key={i}>
        {content}
      </List.Iconic.Item>)}
    </List.Iconic.Wrapper>
  </Centered>
}
