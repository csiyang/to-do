import React from 'react'

import {IForm} from '../helpers/dataTypes'

function Item(props: IForm) {
  const {taskName, taskDetails, taskCompleted} = props
  return (
    <div className='item'>
      <p>Name: {taskName}</p>
      <p>Details: {taskDetails}</p>
      <p>Completed: {taskCompleted}</p>
    </div>
  )
}

export default Item