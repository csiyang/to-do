import React, {useState} from 'react'

function InputForm() {
  const [showForm, setShowForm] = useState(true)
  const [formData, setFormData] = useState({
    taskName: '',
    taskDetails: '',
    taskCompleted: false

  })

  function handleShowClick(): void {
    setShowForm(false)
    setFormData({
      taskName: '',
      taskDetails: '',
      taskCompleted: false
    })
  }

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault()
    console.log(formData)
  }

  function handleBack(e: React.SyntheticEvent):void {
    e.preventDefault()
    setShowForm(true)
  }

  function handleChange(name: string, e: React.ChangeEvent<HTMLInputElement>): void {
    setFormData({
      ...formData,
      [name]: e.currentTarget.value
    })
  }

  return (
    <>
      {showForm 
        ? <button onClick={handleShowClick}>Add New Task</button>
        : <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Task Name' value={formData.taskName} onChange={(e) => handleChange('taskName', e)}/> <br/>
            <input type='text' placeholder='Task Details' value={formData.taskDetails} onChange={(e) => handleChange('taskDetails', e)}/> <br/>
            <input type='submit' value='Submit' />
            <button onClick={handleBack}>Back</button>
          </form>
      }
    </>
  )
}

export default InputForm