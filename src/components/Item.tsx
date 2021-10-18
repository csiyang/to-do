import React from 'react'
import Card from '@mui/material/Card'

import {IForm} from '../helpers/dataTypes'

function Item(props: IForm) {
  const {taskName, taskDetails, taskCompleted} = props
  return (
    <Card variant="outlined">
      <p>Name: {taskName}</p>
      <p>Details: {taskDetails}</p>
      <p>Completed: {taskCompleted}</p>
    </Card>
  )
}

export default Item