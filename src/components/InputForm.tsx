import React, {useState} from 'react'
import {Button, TextField} from '@mui/material/'

import {IForm} from '../helpers/dataTypes'

function InputForm() {
  let currentId: number = 0
  const [showForm, setShowForm] = useState<boolean>(true)
  const [formData, setFormData] = useState<IForm>({
    id: currentId,
    taskName: '',
    taskDetails: '',
    taskCompleted: false
  })

  function handleShowClick(): void {
    setShowForm(false)
    setFormData({
      id: 0,
      taskName: '',
      taskDetails: '',
      taskCompleted: false
    })
  }

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault()
    console.log(formData)
    //send data to be stored
    currentId += 1
  }

  function handleBack(e: React.SyntheticEvent):void {
    e.preventDefault()
    setShowForm(true)
  }

  //React.ChangeEvent<HTMLInputElement>
  function handleChange(name: string, e: any): void {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  return (
    <>
      {showForm 
        ? <Button variant='contained' onClick={handleShowClick}>Add New Task</Button>
        : <form onSubmit={handleSubmit}>
            <TextField required variant='outlined' placeholder='Task Name' value={formData.taskName} onChange={e => handleChange('taskName', e)}/><br />
            <TextField multiline rows={4} variant='outlined' placeholder='Task Details' value={formData.taskDetails} onChange={e => handleChange('taskDetails', e)}/><br />
            <Button variant='contained' type='submit'>Submit</Button>
            <Button variant='contained' onClick={handleBack}>Back</Button>
          </form>
      }
    </>
  )
}

export default InputForm